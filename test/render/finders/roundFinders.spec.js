import {
  calculateRounds,
  drawRounds
} from '../../../src/render/finders/roundFinders';

describe('calculateRounds', () => {
  const scale = 10;
  const startPoint = [0, 0];
  const offsets = [0, 0];

  it('returns inner and outer rounds', () => {
    const [[innerRound], [outerRound]] = calculateRounds(
      scale,
      startPoint,
      offsets
    );

    expect(innerRound).toEqual({ x: 36, y: 36, r: 14 });
    expect(outerRound).toEqual({ x: 36, y: 36, r: 29, width: scale });
  });

  it('returns rounds which are based on not zero start point', () => {
    const [[innerRound], [outerRound]] = calculateRounds(
      scale,
      [10, 10],
      offsets
    );

    expect(innerRound).toEqual({ x: 136, y: 136, r: 14 });
    expect(outerRound).toEqual({ x: 136, y: 136, r: 29, width: scale });
  });

  it('returns rounds which are based on not zero start point and scale', () => {
    const newScale = 100;
    const [[innerRound], [outerRound]] = calculateRounds(
      newScale,
      [10, 10],
      offsets
    );

    expect(innerRound).toEqual({ x: 1351, y: 1351, r: 149 });
    expect(outerRound).toEqual({ x: 1351, y: 1351, r: 299, width: newScale });
  });

  it('applies scale', () => {
    const newScale = 100;
    const [[innerRound], [outerRound]] = calculateRounds(
      newScale,
      startPoint,
      offsets
    );

    expect(innerRound).toEqual({ x: 351, y: 351, r: 149 });
    expect(outerRound).toEqual({ x: 351, y: 351, r: 299, width: newScale });
  });

  it('applies offsets', () => {
    const [[innerRound], [outerRound]] = calculateRounds(scale, startPoint, [
      10,
      30
    ]);

    expect(innerRound).toEqual({ x: 46, y: 66, r: 14 });
    expect(outerRound).toEqual({ x: 46, y: 66, r: 29, width: scale });
  });
});

describe('drawRounds', () => {
  const canvasCtx = {};
  const innerColor = 'white';
  const outerColor = 'black';
  const radius = 1;
  const innerRound = { x: 46, y: 66, r: 14 };
  const outerRound = { x: 46, y: 66, r: 29, width: 10 };

  beforeEach(() => {
    canvasCtx.beginPath = jest.fn();
    canvasCtx.arc = jest.fn();
    canvasCtx.fill = jest.fn();
    canvasCtx.stroke = jest.fn();
  });

  it('draws figures', () => {
    drawRounds(canvasCtx, innerColor, outerColor, [innerRound], [outerRound]);

    expect(canvasCtx.beginPath).toBeCalledTimes(2);
    expect(canvasCtx.stroke).toBeCalledTimes(1);
    expect(canvasCtx.fill).toBeCalledTimes(1);

    expect(canvasCtx.arc).nthCalledWith(
      1,
      outerRound.x,
      outerRound.y,
      outerRound.r,
      0,
      2 * Math.PI
    );
    expect(canvasCtx.arc).nthCalledWith(
      2,
      innerRound.x,
      innerRound.y,
      innerRound.r,
      0,
      2 * Math.PI
    );
  });

  it('returns nothing if there are no coordinates', () => {
    drawRounds(canvasCtx, innerColor, outerColor, [], []);

    expect(canvasCtx.beginPath).toBeCalledTimes(0);
  });
});
