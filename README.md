# qr-code-library

### Installation

Just use this string:

```
npm install git+ssh://git@github.com:qwertmax/qr-code-library.git
```

If you need a specific branch, you will add a branch name after `#`, e.g.:

```
npm install git+ssh://git@github.com:qwertmax/qr-code-library.git#feature/qr-code-rerenders
```

### How can I use it?

For example, if you develop React application (you can use it in other js-projects), you will apply it like this:

```js
// QRCodeImage.js component
import React from 'react';
import qrcode from 'qr-code-library';

const QRCodeImage = () => {
  const image = qrcode.createQrCodeForText('Hello world!');

  return <img src={image} alt="QR code" />;
};

export default App;
```

### QRCode creators

Each creator returns a `base64` representation of a qr-code image.

**createQrCodeForText(text[, options])**

`text` - `String` - text to encode.

**createQrCodeForUrl(url[, options])**

`url` - `String` - url string to encode.

**createQrCodeForEmail(dest[, options])**

`dest` - `Object` - email object to encode.

- `dest.email` - `String`
- `dest.subject` - `String`
- `dest.body` - `String`
- `dest.cc` - `String`
- `dest.bcc` - `String`

**createQrCodeForSms(smsDest[, options])**

`smsDest` - `Object` - sms object to encode.

- `dest.tel` - `String`
- `dest.message` - `String`

**createQrCodeForVCard(urlString[, options])**

text - `String|Array` - text to encode.

### Adding image

### Payload customization

### Finders customization
