import https from 'https';
import http from 'http';
import fs from 'fs';
import { Session } from 'electron';

import * as fromMainBrowserViews from './store/browserViews';

let httpErrorServerUrl = undefined;

export const overrideHttpProtocols = (session: Session, getState, development: boolean) => {
  
  // debug
  let debug = development;

  if (!httpErrorServerUrl) {
    const httpErrorServer = http.createServer((req, res) => {
      if (req.url.startsWith('/load-fails')) {
        try {
          const p = decodeURIComponent(req.url.substr(14));
          res.statusCode = 520;
          res.statusMessage = 'Unknown error';
          res.end(p);
        } catch (err) {
          res.statusCode = 520;
          res.statusMessage = 'Unknown error';
          res.end('HTTP/1.1 520 Unknown error');
        }
      } else if (req.url.startsWith('/unauthorized-app')) {
        res.statusCode = 401;
        res.statusMessage = 'Unauthorized';
        res.end('HTTP/1.1 401 Unauthorized');
      } else if (req.url.startsWith('/unauthorized-host')) {
        res.statusCode = 401;
        res.statusMessage = 'Unauthorized Host';
        res.end('HTTP/1.1 401 Unauthorized Host');
      } else if (req.url.startsWith('/unauthorized-http')) {
        res.statusCode = 401;
        res.statusMessage = 'Unauthorized HTTP';
        res.end('HTTP/1.1 401 Unauthorized HTTP');
      } else {
        res.statusCode = 520;
        res.statusMessage = 'Unknown error';
        res.end('HTTP/1.1 520 Unknown error');
      }
    });
    httpErrorServer.on('listening', function () {
      var addr = httpErrorServer.address();
      httpErrorServerUrl = `http://127.0.0.1:${addr.port}`;
      console.log(`[https] http error server running on ${httpErrorServerUrl}`);
    });
    httpErrorServer.listen(0);
  }

  // Block all HTTP when not development
  if (!development) {
    session.protocol.interceptStreamProtocol('http', (request, callback) => {
      http
        .request(`${httpErrorServerUrl}/unauthorized-http`, (resp) => {
          callback(resp);
        })
        .end();
      return;
    });
  }

  session.protocol.interceptStreamProtocol('https', (request, callback) => {
    // todo : cleaner sentry.io handling
    /*
      todo, forbid third party apps from talking to sentry.io without authorization
      check the User-Agent to see if it is legit (it should be the User-Agent of main process)
      */
    if (request.url.startsWith('https://sentry.io')) {
      try {
        const options = {
          method: request.method,
          host: 'sentry.io',
          port: 443,
          rejectUnauthorized: true,
          path: request.url.replace('https://sentry.io', '') || '/',
          headers: request.headers,
        };
        https
          .request(options, (resp) => {
            callback(resp);
          })
          .on('error', (er) => {
            console.log(er);
          })
          .end(request.uploadData[0].bytes.toString('utf8'));
        return;
      } catch (err) {
        console.log(err);
        return;
      }
    }

    let randomId = '';
    const userAgent = request.headers['User-Agent'];
    try {
      const io = userAgent.indexOf('randomId=');
      randomId = userAgent.substring(io + 'randomId='.length);
    } catch (err) {
      console.log('[https] An unauthorized app tried to make an https request');
      http
        .request(`${httpErrorServerUrl}/unauthorized-app`, (resp) => {
          callback(resp);
        })
        .end();
      return;
    }

    const browserViews = fromMainBrowserViews.getBrowserViewsMain(getState());

    const appId = Object.keys(browserViews).find((appId) => browserViews[appId].randomId === randomId);
    if (!appId) {
      console.log('[https] An unauthorized app tried to make an https request');
      http
        .request(`${httpErrorServerUrl}/unauthorized-app`, (resp) => {
          callback(resp);
        })
        .end();
      return;
    }
    const browserView = browserViews[appId];

    const withoutProtocol = request.url.split('//').slice(1);
    const pathArray = withoutProtocol.join('').split('/');
    const host = pathArray.slice(0, 1)[0];
    const path = pathArray.slice(1).join('/');

    const serversWithSameHost = browserView.servers.filter((s) => s.host === host);

    if (!serversWithSameHost.length) {
      console.log(
        `[https] An app (${browserView.resourceId}) tried to make an https request to an unknown host (${host})`
      );
      http
        .request(`${httpErrorServerUrl}/unauthorized-host`, (resp) => {
          callback(resp);
        })
        .end();
      return;
    }
    const loadFails = {};

    let over = false;
    let i = 0;
    const tryToLoad = (i: number) => {
      if (debug) console.log('[https load]', request.url, i);
      const s = serversWithSameHost[i];
      // See https://nodejs.org/docs/latest-v10.x/api/tls.html#tls_tls_createsecurecontext_options
      const a = new https.Agent({
        host: s.ip,
        rejectUnauthorized: false, // cert does not have to be signed by CA (self-signed)
        cert: decodeURI(s.cert),
        ca: [], // we don't want to rely on CA
      });

      const options = {
        agent: a,
        method: request.method,
        path: path ? `/${path}` : '/',
        headers: {
          ...request.headers,
          host: s.host,
          'User-Agent': request.headers['User-Agent'].substr(0, io),
        },
      };

      try {
        const req = https
          .request(options, (resp) => {
            if (debug) console.log('[https load] OK', resp.statusCode, request.url, i);
            if (!over) {
              callback(resp);
              over = true;
            }
          })
          .on('error', (err) => {
            if (debug) console.log('[https load] ERR', request.url, err.message, i);
            let error;
            if (err.message.includes('connect ECONNRESET')) {
              error = {
                errorCode: 523,
                errorMessage: 'Origin Is Unreachable',
              };
            } else {
              error = {
                errorCode: 520,
                errorMessage: 'Unknown Error',
              };
            }
            loadFails[i] = error;

            if (serversWithSameHost[i + 1]) {
              console.log('WILL TRY AGAIN');
              i += 1;
              tryToLoad(i);
            } else {
              if (debug) {
                console.log(`[https load] Resource for app (${browserView.resourceId}) failed to load (${path})`);
              }
              http
                .get(`${httpErrorServerUrl}/load-fails?p=${encodeURIComponent(JSON.stringify(loadFails))}`, (resp) => {
                  if (!over) {
                    callback(resp);
                    over = true;
                  }
                })
                .end();
              return;
            }
          });

        if (request.uploadData && request.uploadData[0]) {
          request.uploadData.forEach((ud) => {
            if (ud.type === 'rawData') {
              req.write(ud.bytes);
            } else {
              // todo is this safe ?
              // can a IP app or dapp set filePath to /home/bob/anything ???
              const file = fs.readFileSync(ud.filePath);
              // todo, test file upload on other platforms than discord (works on discord)
              req.write(file);
            }
          });

          req.end();
        } else {
          req.end();
        }
      } catch (err) {
        if (debug) console.log('[https load] ERR', request.url, err.message, i);
        let error;
        if (err.message.includes('SSL')) {
          error = {
            errorCode: 526,
            errorMessage: 'Invalid SSL Certificate',
          };
        } else {
          error = {
            errorCode: 520,
            errorMessage: 'Unknown Error',
          };
        }
        loadFails[i] = error;

        if (serversWithSameHost[i + 1]) {
          i += 1;
          tryToLoad(i);
        } else {
          if (debug) console.log(`[https] Resource for app (${browserView.resourceId}) failed to load (${path})`);
          http
            .get(`${httpErrorServerUrl}/load-fails?p=${encodeURIComponent(JSON.stringify(loadFails))}`, (resp) => {
              if (!over) {
                callback(resp);
                over = true;
              }
            })
            .end();
          return;
        }
      }
    };
    tryToLoad(i);
  });
};
