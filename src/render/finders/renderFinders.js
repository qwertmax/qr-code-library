import get from 'lodash.get';
import { FINDER_TYPES } from '../constants';
import { calculateRectDots, drawRectDots } from './rectDotsFinders';
import { calculateRoundDots, drawRoundDots } from './roundDotsFinders';
import { calculateRounds, drawRounds } from './roundFinders';

const mapTypeToRenderFinderFunctions = {
  [FINDER_TYPES.RECT_DOTS]: [calculateRectDots, drawRectDots],
  [FINDER_TYPES.ROUND_DOTS]: [calculateRoundDots, drawRoundDots],
  [FINDER_TYPES.ROUND]: [calculateRounds, drawRounds]
};

/*
 finders: {
   type: 'ROUND',
   outerColor: '',
   innerColor: '',
   finder1: {
    type: 'ROUND',
    outerColor: '',
    innerColor: ''
  },
  finder2: {
    type: 'ROUND',
    outerColor: '',
    innerColor: ''
  },
  finder3: {
    type: 'ROUND',
    outerColor: '',
    innerColor: ''
  }
 }
*/
const FINDER_1 = 'finder1';
const FINDER_2 = 'finder2';
const FINDER_3 = 'finder3';

export default (ctx, size, scale, options, offset) => {
  const finderStartPoints = {
    [FINDER_1]: [size - 7, 0],
    [FINDER_2]: [0, 0],
    [FINDER_3]: [0, size - 7]
  };
  const { finders } = options;
  [FINDER_1, FINDER_2, FINDER_3].forEach(name => {
    const type =
      get(finders, `${name}.type`) || get(finders, `type`) || options.type;
    const outerColor =
      get(finders, `${name}.outerColor`) ||
      get(finders, `outerColor`) ||
      options.content.color;
    const innerColor =
      get(finders, `${name}.innerColor`) ||
      get(finders, `innerColor`) ||
      options.content.color;

    const [calculate, draw] = mapTypeToRenderFinderFunctions[type];

    const [innerCoords, outerCoords] = calculate(
      scale,
      finderStartPoints[name],
      offset
    );
console.log(name, innerColor, outerColor, options)
    draw(ctx, innerColor, outerColor, innerCoords, outerCoords, scale);
  });
};
