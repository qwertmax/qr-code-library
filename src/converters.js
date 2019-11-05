const convertToUrl = url => url;

const convertToText = text => text;

const convertToVCard = ({
  firstName,
  lastName,
  organization,
  role,
  phone,
  url,
  email,
  country,
  state,
  city,
  street,
  zip
}) => {
  const vCardFields = [
    'BEGIN:VCARD',
    `N:${lastName};${firstName}`,
    `FN: ${firstName} ${lastName}`,
    organization ? `ORG:${organization}` : null,
    phone ? `TEL;TYPE=work,voice:${phone}` : null,
    `ADR;TYPE=WORK:${[
      '',
      '',
      street || '',
      city || '',
      state || '',
      zip || '',
      country || ''
    ].join(';')}`,
    email ? `EMAIL:${email}` : null,
    role ? `TITLE: ${role}` : null,
    url ? `URL:${url}` : null,
    'END:VCARD\r\n'
  ]
    .filter(v => v !== null)
    .join('\r\n');

  return vCardFields;
};

const convertToEmail = ({ email, subject, body, cc, bcc }) => {
  const emailUri = `mailto:${email}`;
  const query = [
    cc ? `cc=${cc}` : null,
    bcc ? `bcc=${bcc}` : null,
    subject ? `&subject=${subject}` : null,
    body ? `body=${body}` : null
  ].filter(v => v !== null);

  if (query.length) {
    return emailUri.concat('?', query.join('&'));
  }

  return emailUri;
};

const convertToSms = ({ tel, message }) => `smsto:${tel}:${message}`;

export default {
  convertToUrl,
  convertToText,
  convertToVCard,
  convertToEmail,
  convertToSms
};
