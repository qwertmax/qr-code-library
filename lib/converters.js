const vCardsJS = require('vcards-js');

const convertToUrl = ({ url }) => url;

const convertToText = ({ text }) => text;

const convertToVCard = ({
  firstName,
  lastName,
  organization,
  role,
  cellPhone,
  url,
  email,
  street,
  city,
  postalCode,
  countryRegion
}) => {
  const vCard = vCardsJS();

  vCard.firstName = firstName;
  vCard.lastName = lastName;
  vCard.organization = organization;
  vCard.role = role;
  vCard.cellPhone = cellPhone;
  vCard.url = url;
  vCard.email = email;

  vCard.homeAddress.street = street;
  vCard.homeAddress.city = city;
  vCard.homeAddress.postalCode = postalCode;
  vCard.homeAddress.countryRegion = countryRegion;

  return vCard.getFormattedString();
};

const convertToEmail = ({
  email,
  subject = '',
  body = '',
  cc = '',
  bcc = ''
}) => `mailto:${email}?cc=${cc}&bcc=${bcc}&subject=${subject}&body=${body}`;

const convertToSms = ({ tel, message }) => `smsto:${tel}:${message}`;

module.exports = {
  convertToUrl,
  convertToText,
  convertToVCard,
  convertToEmail,
  convertToSms
};
