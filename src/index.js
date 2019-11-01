const converters = require('./converters');
const generator = require('./generator');
const rerender = require('./rerender');

const createQrCode = (payload, opts = {}) => {
  const matrix = generator.getQRCodeBitMatrix(payload);

  return rerender(matrix, opts);
};

const createQrCodeForUrl = (fields, opts) => {
  const payload = converters.convertToUrl(fields);

  return createQrCode(payload, opts);
};

const createQrCodeForText = (fields, opts) => {
  const payload = converters.convertToText(fields);

  return createQrCode(payload, opts);
};

const createQrCodeForVCard = (fields, opts) => {
  const payload = converters.convertToVCard(fields);
console.log(payload)
  return createQrCode(payload, opts);
};

const createQrCodeForEmail = (fields, opts) => {
  const payload = converters.convertToEmail(fields);

  return createQrCode(payload, opts);
};

const createQrCodeForSms = (fields, opts) => {
  const payload = converters.convertToSms(fields);

  return createQrCode(payload, opts);
};

module.exports = {
  createQrCodeForUrl,
  createQrCodeForText,
  createQrCodeForVCard,
  createQrCodeForEmail,
  createQrCodeForSms
};
