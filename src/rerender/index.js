const { calculateRectDots, drawRectDots } = require('./rectDots');
const { calculateRoundDots, drawRoundDots } = require('./roundDots');
const getCanvas = require('../utils/getCanvas');

const DEFAULT_OPTS = {
  scale: 10
};

const RERENDER_TYPES = {
  RECT_DOTS: 'RECT_DOTS',
  ROUND_DOTS: 'ROUND_DOTS'
};

const mapTypeToRerenderFunctions = {
  [RERENDER_TYPES.RECT_DOTS]: [calculateRectDots, drawRectDots],
  [RERENDER_TYPES.ROUND_DOTS]: [calculateRoundDots, drawRoundDots]
};

module.exports = (
  bitMatrix,
  { type = RERENDER_TYPES.RECT_DOTS, options = {} }
) => {
  const { size, data } = bitMatrix;
  const scale = DEFAULT_OPTS.scale;

  const [calculate, draw] = mapTypeToRerenderFunctions[type];
  const coords = calculate(data, size, scale);

  const width = scale * size;
  const height = scale * size;
  const canvas = getCanvas(width, height);

  canvas.width = width;
  canvas.height = height;

  const ctx = canvas.getContext('2d');

  draw(ctx, coords, scale);

  return canvas.toDataURL("image/png");
};
