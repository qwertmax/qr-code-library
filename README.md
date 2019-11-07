[![Actions Status](https://github.com/qwertmax/qr-code-library/workflows/library-test/badge.svg)](https://github.com/qwertmax/qr-code-library/actions)


# qr-code-library

![QR Code library logo](https://i.ibb.co/4sgYMLw/cbimage.png)

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

text - `Object` - vCard object to encode.

- `firstName` - `String`
- `lastName` - `String`
- `organization` - `String`
- `role` - `String`
- `phone` - `String`
- `url` - `String`
- `email` - `String`
- `country` - `String`
- `state` - `String`
- `city` - `String`
- `street` - `String`
- `zip` - `String`

## Options

Options is optional argument.

```js
{
  type: 'render content type';
  content: {...},
  finder: {...},
  border: {...} // coming soon...
}
```

### Render content types

- 'RECT_DOTS'
- 'ROUND_DOTS'

### Content customization

Content options provide color, margins, background color and image object (see [Adding image](#Adding-image)).

```js
options = {
  content: {
    color: 'white',
    background: 'black',
    margins: 20,
    image: HTMLImageElement
  },
  ...
}
```

### Finders customization

You can customize all finders and each separately both.

```js
options = {
  ...
  finders: {
    type: 'render finder type',
    innerColor: '#ddd',
    outerColor: 'red',
    finder1: {
      type: 'render finder type',
      innerColor: '#ddd',
      outerColor: 'red'
    },
    finder2: {
      type: 'render finder type',
      innerColor: '#ddd',
      outerColor: 'red'
    },
    finder3: {
      type: 'render finder type',
      innerColor: '#ddd',
      outerColor: 'red'
    }
  }
}
```

### Render finder types

- 'RECT_DOTS'
- 'ROUND_DOTS'
- 'ROUND'

### Adding image

If you want to add an image, you will use one of these things: CSSImageValue, HTMLImageElement, SVGImageElement, HTMLVideoElement, HTMLCanvasElement, ImageBitmap or OffscreenCanvas.
[See more](https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API/Tutorial/Using_images)
