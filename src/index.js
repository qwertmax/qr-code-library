const converters = require('./converters');
const generator = require('./generator');
const rerender = require('./rerender');

const createQrCode = (payload, ...args) => {
  const matrix = generator.getQRCodeBitMatrix(payload);

  return rerender(matrix);
};

const createQrCodeFromUrl = (fields, ...args) => {
  const payload = converters.convertToUrl(fields);

  return createQrCode(payload, ...args);
};

const createQrCodeFromText = (fields, ...args) => {
  const payload = converters.convertToText(fields);

  return createQrCode(payload, ...args);
};

const createQrCodeFromVCard = (fields, ...args) => {
  const payload = converters.convertToVCard(fields);

  return createQrCode(payload, ...args);
};

const createQrCodeFromEmail = (fields, ...args) => {
  const payload = converters.convertToEmail(fields);

  return createQrCode(payload, ...args);
};

const createQrCodeFromSms = (fields, ...args) => {
  const payload = converters.convertToSms(fields);

  return createQrCode(payload, ...args);
};

module.exports = {
  createQrCodeFromUrl,
  createQrCodeFromText,
  createQrCodeFromVCard,
  createQrCodeFromEmail,
  createQrCodeFromSms
};
