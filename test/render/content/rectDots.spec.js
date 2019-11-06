import {
  calculateRectDots,
  drawRectDots
} from '../../../src/render/content/rectDots';

describe('calculateRectDots', () => {
  /* test matrix
    |X|0|
    |X|X|
  */

  const data = [1, 0, 1, 1];
  const size = 2;
  const scale = 5;
  const offsets = [0, 0];

  it('returns correct coordinates of each dot', () => {
    const dots = calculateRectDots(data, size, scale, offsets);

    expect(dots[0]).toEqual({ x: 0, y: 0 });
    expect(dots[1]).toEqual({ x: 0, y: 5 });
    expect(dots[2]).toEqual({ x: 5, y: 5 });
  });

  it.each`
    data         | length
    ${[1, 0, 1]} | ${2}
    ${[0, 1, 0]} | ${1}
    ${[0, 0, 0]} | ${0}
  `('omits zero values in $data', ({ data, length }) => {
    expect(calculateRectDots(data, size, scale, offsets)).toHaveLength(length);
  });

  it('returns dots depending on offsets', () => {
    const dots = calculateRectDots(data, size, scale, [10, 10]);

    expect(dots[0]).toEqual({ x: 10, y: 10 });
    expect(dots[1]).toEqual({ x: 10, y: 15 });
    expect(dots[2]).toEqual({ x: 15, y: 15 });
  });
});

describe('drawRectDots', () => {
  const canvasCtx = {};
  const scale = 10;
  const options = {
    content: {
      color: 'white'
    }
  };
  const coords = [{ x: 0, y: 0 }, { x: 20, y: 30 }];

  beforeEach(() => {
    canvasCtx.fillRect = jest.fn();
  });

  it('draws each dot correctly', () => {
    drawRectDots(canvasCtx, coords, options, scale);

    expect(canvasCtx.fillRect).nthCalledWith(
      1,
      coords[0].x,
      coords[0].y,
      scale,
      scale
    );
    expect(canvasCtx.fillRect).nthCalledWith(
      2,
      coords[1].x,
      coords[1].y,
      scale,
      scale
    );
  });

  it('sets up fill style color', () => {
    drawRectDots(canvasCtx, coords, options, scale);

    expect(canvasCtx.fillStyle).toEqual(options.content.color);
  });

  it('draws nothing when there is are no coordinates', () => {
    drawRectDots(canvasCtx, [], options, scale);

    expect(canvasCtx.fillRect).toBeCalledTimes(0);
  });
});
