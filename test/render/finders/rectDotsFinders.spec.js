import {
  calculateRectDots,
  drawRectDots
} from '../../../src/render/finders/rectDotsFinders';

const findDot = (dots, { x, y }) =>
  dots.find(dot => dot.x === x && dot.y === y);

describe('calculateRectDots', () => {
  const scale = 1;
  const startPoint = [0, 0];
  const offsets = [0, 0];

  it('returns inner and outer dots', () => {
    const [inner, outer] = calculateRectDots(scale, startPoint, offsets);

    expect(inner).toHaveLength(9);
    expect(outer).toHaveLength(24);

    const outerExpectedDots = [];

    for (let i = 0; i < 6; i += 1) {
      outerExpectedDots.push({ x: i, y: 0 });
      outerExpectedDots.push({ x: 6, y: i });
      outerExpectedDots.push({ x: 6 - i, y: 6 });
      outerExpectedDots.push({ x: 0, y: 6 - i });
    }

    outerExpectedDots.forEach(expectedDot => {
      expect(findDot(outer, expectedDot)).toBeTruthy();
    });

    const innerExpectedDots = [];

    for (let i = 0; i < 3; i += 1) {
      innerExpectedDots.push({ x: i + 2, y: 2 });
      innerExpectedDots.push({ x: i + 2, y: 3 });
      innerExpectedDots.push({ x: i + 2, y: 4 });
    }

    innerExpectedDots.forEach(expectedDot => {
      expect(findDot(inner, expectedDot)).toBeTruthy();
    });

    expect.assertions(outerExpectedDots.length + innerExpectedDots.length + 2);
  });

  it('returns dots which are based on not zero start point', () => {
    const [inner, outer] = calculateRectDots(scale, [10, 10], offsets);

    const innerDot = inner[0];
    const outerDot = outer[0];

    expect(innerDot).toEqual({ x: 12, y: 12 });
    expect(outerDot).toEqual({ x: 10, y: 10 });
  });

  it('returns dots which are based on not zero start point and scale', () => {
    const [inner, outer] = calculateRectDots(10, [10, 10], offsets);

    const innerDot = inner[0];
    const outerDot = outer[0];

    expect(innerDot).toEqual({ x: 120, y: 120 });
    expect(outerDot).toEqual({ x: 100, y: 100 });
  });

  it('applies scale', () => {
    const [inner, outer] = calculateRectDots(10, startPoint, offsets);

    const innerDot = inner[0];
    const outerDot = outer[0];

    expect(outerDot).toEqual({ x: 0, y: 0 });
    expect(innerDot).toEqual({ x: 20, y: 20 });
  });

  it('applies offsets', () => {
    const [inner, outer] = calculateRectDots(scale, startPoint, [10, 30]);

    const innerDot = inner[0];
    const outerDot = outer[0];

    expect(innerDot).toEqual({ x: 12, y: 32 });
    expect(outerDot).toEqual({ x: 10, y: 30 });
  });
});

describe('drawRectDots', () => {
  const canvasCtx = {};
  const innerColor = 'white';
  const outerColor = 'black';
  const innerPoints = [{ x: 2, y: 2 }];
  const outerPoints = [{ x: 0, y: 2 }];
  const scale = 12;

  beforeEach(() => {
    canvasCtx.fillRect = jest.fn();
  });

  it('draws figures', () => {
    drawRectDots(
      canvasCtx,
      innerColor,
      outerColor,
      innerPoints,
      outerPoints,
      scale
    );

    expect(canvasCtx.fillRect).nthCalledWith(
      1,
      innerPoints[0].x,
      innerPoints[0].y,
      scale,
      scale
    );
    expect(canvasCtx.fillRect).nthCalledWith(
      2,
      outerPoints[0].x,
      outerPoints[0].y,
      scale,
      scale
    );
  });

  it('returns nothing if there are no coordinates', () => {
    drawRectDots(canvasCtx, innerColor, outerColor, [], []);

    expect(canvasCtx.fillRect).toBeCalledTimes(0);
  });
});
