import { getQRCodeBitMatrix } from '../src/generator';

test('getQRCodeBitMatrix return correct bit matrix', () => {
  const payload = 'text';
  const bitMatrix = getQRCodeBitMatrix(payload, {});

  expect(bitMatrix.size).toBeGreaterThan(0);
  expect(bitMatrix.data).toBeInstanceOf(Array);
});

test('getQRCodeBitMatrix can work with default options', () => {
  expect(() => {
    getQRCodeBitMatrix('text');
  }).not.toThrow();
});
