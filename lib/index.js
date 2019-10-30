const generator = require('./generator');

const fromUrl = (payload, ...args) => {
  return generator.toString(payload, args);
};

const fromText = () => {};

const fromVCard = () => {};

const fromEmail = () => {};

const fromSms = () => {};
