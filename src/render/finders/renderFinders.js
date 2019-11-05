import { FINDER_TYPES } from '../constants';
import { calculateRectDots, drawRectDots } from './rectDotsFinders';
import { calculateRoundDots, drawRoundDots } from './roundDotsFinders';

const mapTypeToRenderFinderFunctions = {
  [FINDER_TYPES.RECT_DOTS]: [calculateRectDots, drawRectDots],
  [FINDER_TYPES.ROUND_DOTS]: [calculateRoundDots, drawRoundDots],
  [FINDER_TYPES.ROUND]: [calculateRoundDots, drawRoundDots]
};

export default (ctx, size, scale, contentType, options) => {
  
};
