const generator = require('../src/generator');

test('getQRCodeBitMatrix return correct bit matrix', () => {
  const payload = 'text';
  const bitMatrix = generator.getQRCodeBitMatrix(payload, {});

  expect(bitMatrix.size).toBeGreaterThan(0);
  expect(bitMatrix.data).toBeInstanceOf(Array);
});

test('getQRCodeBitMatrix can work with default options', () => {
  expect(() => {
    generator.getQRCodeBitMatrix('text', {});
  }).not.toThrow();
});
