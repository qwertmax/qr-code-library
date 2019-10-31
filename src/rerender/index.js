const { calculateRectDots, drawRectDots } = require('./rectDots');
const { calculateRoundDots, drawRoundDots } = require('./roundDots');
const getCanvasContext = required('../utils/getCanvasContext.js');

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

module.exports = (bitMatrix, type = RERENDER_TYPES.RECT_DOTS) => {
  const { size, data } = bitMatrix;
  const scale = DEFAULT_OPTS.scale;
  const width = scale * size;
  const height = scale * size;
  const ctx = getCanvasContext(width, height);
  const [calculate, draw] = mapTypeToRerenderFunctions[type];
  const coords = calculate(data, size, scale);

  draw(ctx, coords, scale);
};
