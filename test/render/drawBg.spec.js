import drawBg from '../../src/render/drawBg';

describe('', () => {
  const canvasCtx = {};
  const width = 100;
  const height = 80;
  const color = 'white';
  const borderSize = 10;

  beforeEach(() => {
    canvasCtx.fillRect = jest.fn();
  });

  test('drawBg calls fillRect with correct arguments', () => {
    drawBg(canvasCtx, width, height, color, borderSize);

    expect(canvasCtx.fillRect).toBeCalledWith(10, 10, 80, 60);
  });

  test('drawBg set fill style color', () => {
    drawBg(canvasCtx, width, height, color, borderSize);

    expect(canvasCtx.fillStyle).toEqual(color);
  });

  test('drawBg calls fillRect with correct argiments when there is no border size', () => {
    drawBg(canvasCtx, width, height, color, 0);

    expect(canvasCtx.fillRect).toBeCalledWith(0, 0, 100, 80);
  });
});
