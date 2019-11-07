import drawBg from '../../src/render/drawBg';

describe('drawBg', () => {
  const canvasCtx = {};
  const width = 100;
  const height = 80;
  const color = 'white';
  const borderSize = 10;

  beforeEach(() => {
    canvasCtx.fillRect = jest.fn();
  });

  it('calls fill rect func with correct arguments', () => {
    drawBg(canvasCtx, width, height, color, borderSize);

    expect(canvasCtx.fillRect).toBeCalledWith(10, 10, 80, 60);
  });

  it('set fill style color', () => {
    drawBg(canvasCtx, width, height, color, borderSize);

    expect(canvasCtx.fillStyle).toEqual(color);
  });

  it('calls fill rect func without border size', () => {
    drawBg(canvasCtx, width, height, color, 0);

    expect(canvasCtx.fillRect).toBeCalledWith(0, 0, 100, 80);
  });
});
