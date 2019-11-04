import {
  convertToUrl,
  convertToText,
  convertToVCard,
  convertToEmail,
  convertToSms
} from './converters';
import { getQRCodeBitMatrix } from './generator';
import rerender from './rerender';

const createQrCode = (payload, opts = {}) => {
  const matrix = getQRCodeBitMatrix(payload);

  return rerender(matrix, opts);
};

const createQrCodeForUrl = (fields, opts) => {
  const payload = convertToUrl(fields);

  return createQrCode(payload, opts);
};

const createQrCodeForText = (fields, opts) => {
  const payload = convertToText(fields);

  return createQrCode(payload, opts);
};

const createQrCodeForVCard = (fields, opts) => {
  const payload = convertToVCard(fields);

  return createQrCode(payload, opts);
};

const createQrCodeForEmail = (fields, opts) => {
  const payload = convertToEmail(fields);

  return createQrCode(payload, opts);
};

const createQrCodeForSms = (fields, opts) => {
  const payload = convertToSms(fields);

  return createQrCode(payload, opts);
};

export default {
  createQrCodeForUrl,
  createQrCodeForText,
  createQrCodeForVCard,
  createQrCodeForEmail,
  createQrCodeForSms
};
