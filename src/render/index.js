import { calculateRectDots, drawRectDots } from './rectDots';
import { calculateRoundDots, drawRoundDots } from './roundDots';
import getCanvasContext from '../utils/getCanvasContext';

const DEFAULT_OPTS = {
  scale: 10
};

const RENDER_TYPES = {
  RECT_DOTS: 'RECT_DOTS',
  ROUND_DOTS: 'ROUND_DOTS'
};

const mapTypeToRenderFunctions = {
  [RENDER_TYPES.RECT_DOTS]: [calculateRectDots, drawRectDots],
  [RENDER_TYPES.ROUND_DOTS]: [calculateRoundDots, drawRoundDots]
};

export default (bitMatrix, type = RENDER_TYPES.RECT_DOTS) => {
  const { size, data } = bitMatrix;
  const scale = DEFAULT_OPTS.scale;
  const width = scale * size;
  const height = scale * size;
  const ctx = getCanvasContext(width, height);
  const [calculate, draw] = mapTypeToRenderFunctions[type];
  const coords = calculate(data, size, scale);

  draw(ctx, coords, scale);
};
