import drawImage from '../../src/render/drawImage';

describe('drawImage', () => {
  const canvasCtx = {};
  const image = {};
  const size = 21;
  const scale = 6;

  beforeEach(() => {
    canvasCtx.drawImage = jest.fn();
  });

  test('calls draw image function with correct arguments', () => {
    const offsets = [10, 10];
    drawImage(canvasCtx, image, size, scale, offsets);

    expect(canvasCtx.drawImage).toBeCalledWith(image, 52, 52, 42, 42);
  });

  test('calls  draw image function with correct argiments when there is no offset', () => {
    const offsets = [0, 0];
    drawImage(canvasCtx, image, size, scale, offsets);

    expect(canvasCtx.drawImage).toBeCalledWith(image, 42, 42, 42, 42);
  });
});
