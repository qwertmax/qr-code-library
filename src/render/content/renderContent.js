import { calculateRectDots, drawRectDots } from './rectDots';
import { calculateRoundDots, drawRoundDots } from './roundDots';
import { RENDER_TYPES } from '../constants';

const mapTypeToRenderContentFunctions = {
  [RENDER_TYPES.RECT_DOTS]: [calculateRectDots, drawRectDots],
  [RENDER_TYPES.ROUND_DOTS]: [calculateRoundDots, drawRoundDots]
};

export default (ctx, data, size, scale, options, offset) => {
  const type = options.type;
  const [calculate, draw] = mapTypeToRenderContentFunctions[type];
  const coords = calculate(data, size, scale, offset);

  draw(ctx, coords, options, scale);
}
