import {
  calculateRoundDots,
  drawRoundDots
} from '../../../src/render/finders/roundDotsFinders';

const findDot = (dots, { x, y, r }) =>
  dots.find(dot => dot.x === x && dot.y === y && dot.r === r);

describe('calculateRoundDots', () => {
  const scale = 10;
  const startPoint = [0, 0];
  const offsets = [0, 0];
  const radius = scale / 2 - 1;

  it('returns inner and outer dots', () => {
    const [inner, outer] = calculateRoundDots(scale, startPoint, offsets);

    expect(inner).toHaveLength(9);
    expect(outer).toHaveLength(24);

    const outerExpectedDots = [];

    for (let i = 0; i < 6; i += 1) {
      outerExpectedDots.push({
        x: scale * i + radius + 1,
        y: 0 + radius + 1,
        r: radius
      });
      outerExpectedDots.push({
        x: scale * 6 + radius + 1,
        y: scale * i + radius + 1,
        r: radius
      });
      outerExpectedDots.push({
        x: scale * (6 - i) + radius + 1,
        y: scale * 6 + radius + 1,
        r: radius
      });
      outerExpectedDots.push({
        x: 0 + radius + 1,
        y: scale * (6 - i) + radius + 1,
        r: radius
      });
    }

    outerExpectedDots.forEach(expectedDot => {
      expect(findDot(outer, expectedDot)).toBeTruthy();
    });

    const innerExpectedDots = [];

    for (let i = 0; i < 3; i += 1) {
      innerExpectedDots.push({
        x: scale * (i + 2) + radius + 1,
        y: scale * 2 + radius + 1,
        r: radius
      });
      innerExpectedDots.push({
        x: scale * (i + 2) + radius + 1,
        y: scale * 3 + radius + 1,
        r: radius
      });
      innerExpectedDots.push({
        x: scale * (i + 2) + radius + 1,
        y: scale * 4 + radius + 1,
        r: radius
      });
    }

    innerExpectedDots.forEach(expectedDot => {
      expect(findDot(inner, expectedDot)).toBeTruthy();
    });

    expect.assertions(outerExpectedDots.length + innerExpectedDots.length + 2);
  });

  it('returns dots which are based on not zero start point', () => {
    const [inner, outer] = calculateRoundDots(scale, [10, 10], offsets);

    const innerDot = inner[0];
    const outerDot = outer[0];

    expect(innerDot).toEqual({
      x: scale * 12 + radius + 1,
      y: scale * 12 + radius + 1,
      r: radius
    });
    expect(outerDot).toEqual({
      x: scale * 10 + radius + 1,
      y: scale * 10 + radius + 1,
      r: radius
    });
  });

  it('returns dots which are based on not zero start point and scale', () => {
    const newScale = 100;
    const newRadius = newScale / 2 - 1;
    const [inner, outer] = calculateRoundDots(newScale, [10, 10], offsets);

    const innerDot = inner[0];
    const outerDot = outer[0];

    expect(innerDot).toEqual({
      x: newScale * 12 + newRadius + 1,
      y: newScale * 12 + newRadius + 1,
      r: newRadius
    });
    expect(outerDot).toEqual({
      x: newScale * 10 + newRadius + 1,
      y: newScale * 10 + newRadius + 1,
      r: newRadius
    });
  });

  it('applies scale', () => {
    const newScale = 100;
    const newRadius = newScale / 2 - 1;
    const [inner, outer] = calculateRoundDots(newScale, startPoint, offsets);

    const innerDot = inner[0];
    const outerDot = outer[0];

    expect(outerDot).toEqual({
      x: 0 + newRadius + 1,
      y: 0 + newRadius + 1,
      r: newRadius
    });
    expect(innerDot).toEqual({
      x: newScale * 2 + newRadius + 1,
      y: newScale * 2 + newRadius + 1,
      r: newRadius
    });
  });

  it('applies offsets', () => {
    const [inner, outer] = calculateRoundDots(scale, startPoint, [10, 30]);

    const outerDot = outer[0];
    const innerDot = inner[0];

    expect(outerDot).toEqual({
      x: 0 + radius + 1 + 10,
      y: 0 + radius + 1 + 30,
      r: radius
    });
    expect(innerDot).toEqual({
      x: scale * 2 + radius + 1 + 10,
      y: scale * 2 + radius + 1 + 30,
      r: radius
    });
  });
});

describe('drawRoundDots', () => {
  const canvasCtx = {};
  const innerColor = 'white';
  const outerColor = 'black';
  const radius = 1;
  const innerPoints = [{ x: 1, y: 1, r: radius }];
  const outerPoints = [{ x: 1, y: 3, r: radius }];

  beforeEach(() => {
    canvasCtx.beginPath = jest.fn();
    canvasCtx.arc = jest.fn();
    canvasCtx.fill = jest.fn();
    canvasCtx.stroke = jest.fn();
  });

  it('draws figures', () => {
    drawRoundDots(canvasCtx, innerColor, outerColor, innerPoints, outerPoints);

    expect(canvasCtx.beginPath).toBeCalledTimes(2);
    expect(canvasCtx.fill).toBeCalledTimes(2);
    expect(canvasCtx.stroke).toBeCalledTimes(2);

    expect(canvasCtx.arc).nthCalledWith(
      1,
      innerPoints[0].x,
      innerPoints[0].y,
      radius,
      0,
      2 * Math.PI
    );
    expect(canvasCtx.arc).nthCalledWith(
      2,
      outerPoints[0].x,
      outerPoints[0].y,
      radius,
      0,
      2 * Math.PI
    );
  });

  it('returns nothing if there are no coordinates', () => {
    drawRoundDots(canvasCtx, innerColor, outerColor, [], []);

    expect(canvasCtx.beginPath).toBeCalledTimes(0);
  });
});
