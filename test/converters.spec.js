import {
  convertToUrl,
  convertToText,
  convertToVCard,
  convertToEmail,
  convertToSms
} from '../src/converters';

test('convertToUrl should return passed string', () => {
  expect(convertToUrl('http://url.com')).toEqual('http://url.com');
});

test('convertToText should return passed string', () => {
  expect(convertToText('text')).toEqual('text');
});

describe('convertToVCard', () => {
  it('should return vCard representation for last name and first name', () => {
    const payload = {
      firstName: 'John',
      lastName: 'Doe'
    };

    expect(convertToVCard(payload)).toMatchSnapshot();
  });

  it('should return vCard representation with additional fields', () => {
    const payload = {
      firstName: 'John',
      lastName: 'Doe',
      organization: 'Company',
      role: 'Developer',
      email: 'test@example.com',
      url: 'test.example.com'
    };

    expect(convertToVCard(payload)).toMatchSnapshot();
  });

  it('should return vCard representation with address', () => {
    const payload = {
      firstName: 'John',
      lastName: 'Doe',
      street: '123 Main Street',
      city: 'Any Town',
      state: 'CA',
      zip: '91921-1234',
      country: 'USA'
    };

    expect(convertToVCard(payload)).toMatchSnapshot();
  });
});

describe('convertToEmail', () => {
  it('should return email uri', () => {
    expect(convertToEmail({ email: 'test@example.com' })).toEqual(
      'mailto:test@example.com'
    );
  });
  it('should return email uri with additional queries', () => {
    const payload = {
      email: 'test@example.com',
      subject: 'Look here! Email subject!',
      body: 'Something...',
      cc: 'cc@example.com',
      bcc: 'bcc@example.com'
    };

    expect(convertToEmail(payload)).toMatchSnapshot();
  });
});

test('convertToSms should return sns uri', () => {
  expect(convertToSms({ tel: '+71234567890', message: 'Sms text' })).toEqual(
    'smsto:+71234567890:Sms text'
  );
});
