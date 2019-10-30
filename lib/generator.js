const qrcode = require('qrcode');

const defaultOpts = {};

const getQRCodeBitMatrix = (payload, opts = {}) => {
  const options = Object.assign({}, defaultOpts, opts);

  return qrcode.create(payload, options);
};

module.exports = {
  getQRCodeBitMatrix
};
