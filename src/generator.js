import { create } from 'qrcode';

const defaultOpts = {};

// TODO: object doesn't ensure a right order for values
const getBits = bitObject => Object.values(bitObject);

export const getQRCodeBitMatrix = (payload, opts = {}) => {
  const options = Object.assign({}, defaultOpts, opts);
  const qrCodeStructure = create(payload, options);
  const bitMatrix = {
    data: getBits(qrCodeStructure.modules.data),
    size: qrCodeStructure.modules.size
  };

  return bitMatrix;
};
