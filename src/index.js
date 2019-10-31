import {
  convertToUrl,
  convertToText,
  convertToVCard,
  convertToEmail,
  convertToSms
} from './converters';
import { getQRCodeBitMatrix } from './generator';
import render from './render';

export const createQrCode = (payload, ...args) => {
  const matrix = getQRCodeBitMatrix(payload);

  return render(matrix);
};

export const createQrCodeFromUrl = (fields, ...args) => {
  const payload = convertToUrl(fields);

  return createQrCode(payload, ...args);
};

export const createQrCodeFromText = (fields, ...args) => {
  const payload = convertToText(fields);

  return createQrCode(payload, ...args);
};

export const createQrCodeFromVCard = (fields, ...args) => {
  const payload = convertToVCard(fields);

  return createQrCode(payload, ...args);
};

export const createQrCodeFromEmail = (fields, ...args) => {
  const payload = convertToEmail(fields);

  return createQrCode(payload, ...args);
};

export const createQrCodeFromSms = (fields, ...args) => {
  const payload = convertToSms(fields);

  return createQrCode(payload, ...args);
};
