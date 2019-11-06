export const convertToUrl = url => url;

export const convertToText = text => text;

export const convertToVCard = ({
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
    role ? `TITLE: ${role}` : null,
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
    url ? `URL:${url}` : null,
    'END:VCARD\r\n'
  ]
    .filter(v => v !== null)
    .join('\r\n');

  return vCardFields;
};

export const convertToEmail = ({ email, subject, body, cc, bcc }) => {
  const emailUri = `mailto:${email}`;
  const query = [
    subject ? `&subject=${subject}` : null,
    body ? `body=${body}` : null,
    cc ? `cc=${cc}` : null,
    bcc ? `bcc=${bcc}` : null
  ].filter(v => v !== null);

  if (query.length) {
    return emailUri.concat('?', query.join('&'));
  }

  return emailUri;
};

export const convertToSms = ({ tel, message }) => `smsto:${tel}:${message}`;
