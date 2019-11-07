import {
  calculateRoundDots,
  drawRoundDots
} from '../../../src/render/content/roundDots';

describe('calculateRoundDots', () => {
  /* test matrix
    |X|0|
    |X|X|
  */

  const data = [1, 0, 1, 1];
  const size = 2;
  const scale = 4;
  const offsets = [0, 0];

  it('returns correct coordinates of each dot', () => {
    const dots = calculateRoundDots(data, size, scale, offsets);

    expect(dots[0]).toEqual({ x: 2, y: 2, r: 1 });
    expect(dots[1]).toEqual({ x: 2, y: 6, r: 1 });
    expect(dots[2]).toEqual({ x: 6, y: 6, r: 1 });
  });

  it.each`
    data         | length
    ${[1, 0, 1]} | ${2}
    ${[0, 1, 0]} | ${1}
    ${[0, 0, 0]} | ${0}
  `('omits zero values in $data', ({ data, length }) => {
    expect(calculateRoundDots(data, size, scale, offsets)).toHaveLength(length);
  });

  it('returns dots depending on offsets', () => {
    const dots = calculateRoundDots(data, size, scale, [10, 10]);

    expect(dots[0]).toEqual({ x: 12, y: 12, r: 1 });
    expect(dots[1]).toEqual({ x: 12, y: 16, r: 1 });
    expect(dots[2]).toEqual({ x: 16, y: 16, r: 1 });
  });
});

describe('drawRoundDots', () => {
  const canvasCtx = {};
  const options = {
    content: {
      color: 'white'
    }
  };
  const coords = [{ x: 5, y: 5, r: 5 }, { x: 20, y: 30, r: 5 }];

  beforeEach(() => {
    canvasCtx.beginPath = jest.fn();
    canvasCtx.arc = jest.fn();
    canvasCtx.fill = jest.fn();
    canvasCtx.stroke = jest.fn();
  });

  it('draws each dot correctly', () => {
    drawRoundDots(canvasCtx, coords, options);

    expect(canvasCtx.beginPath).toBeCalledTimes(2);
    expect(canvasCtx.fill).toBeCalledTimes(2);
    expect(canvasCtx.stroke).toBeCalledTimes(2);
    expect(canvasCtx.arc).nthCalledWith(
      1,
      coords[0].x,
      coords[0].y,
      coords[0].r,
      0,
      2 * Math.PI
    );
    expect(canvasCtx.arc).nthCalledWith(
      2,
      coords[1].x,
      coords[1].y,
      coords[1].r,
      0,
      2 * Math.PI
    );
  });

  it('sets up inner circle color', () => {
    drawRoundDots(canvasCtx, coords, options);

    expect(canvasCtx.fillStyle).toEqual(options.content.color);
  });

  it('sets up circle border color', () => {
    drawRoundDots(canvasCtx, coords, options);

    expect(canvasCtx.strokeStyle).toEqual(options.content.color);
  });

  it('draws nothing when there is are no coordinates', () => {
    drawRoundDots(canvasCtx, [], options);

    expect(canvasCtx.beginPath).toBeCalledTimes(0);
  });
});
