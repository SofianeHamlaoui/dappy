import * as yup from 'yup';

const dappyNodeInfoSchema = yup
  .object()
  .shape({
    lastFinalizedBlockNumber: yup.number().required(),
    dappyNodeVersion: yup.string().required(),
    rchainNamesRegistryUri: yup.string().required(),
    rnodeVersion: yup.string().required(),
    rchainNetwork: yup.string().required(),
    namePrice: yup.number().required(),
  })
  .required()
  .noUnknown(true)
  .strict(true);

const dappyNodeInfoFullSchema = yup
  .object()
  .shape({
    chainId: yup.string().required(),
    date: yup.string().required(),
    info: dappyNodeInfoSchema.required(),
  })
  .required()
  .noUnknown(true)
  .strict(true);

export const validateDappyNodeFullInfo = (dnfi: any) => {
  return new Promise((resolve, reject) => {
    if (!dnfi) {
      reject();
      return;
    }
    dappyNodeInfoFullSchema.isValid(dnfi).then(valid => {
      if (valid) {
        resolve();
      } else {
        reject();
      }
    });
  });
};
export const validateDappyNodeInfo = (dni: any) => {
  return new Promise((resolve, reject) => {
    if (!dni) {
      reject();
      return;
    }
    dappyNodeInfoSchema.isValid(dni).then(valid => {
      if (valid) {
        resolve();
      } else {
        reject();
      }
    });
  });
};
