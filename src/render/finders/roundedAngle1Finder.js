import {
  createInnerCoord,
  createOuterCoord,
  drawRoundedFinder
} from './roundedRectHelpers';

export const calculateRoundedAngle1 = (scale, [dx, dy], [offsetX, offsetY]) => {
  const innerPatterns = [
    { x: 2, y: 2 },
    { x: 4, y: 2 },
    { x: 4, y: 3, angle: (3 / 2) * Math.PI },
    { x: 5, y: 4 },
    { x: 5, y: 5 },
    { x: 3, y: 5 },
    { x: 2, y: 5 },
    { x: 2, y: 3 },
    { x: 2, y: 2 }
  ];

  const innerCoords = innerPatterns.map(ip =>
    createInnerCoord(ip, scale, dx, dy, offsetX, offsetY)
  );

  const outerPatterns = [
    { x: 0, y: 0, oxCoef: 1, oyCoef: 1 },
    { x: 5, y: 0, oxCoef: -1, oyCoef: 1 },
    { x: 5, y: 2, oxCoef: -1, oyCoef: 1, angle: (3 / 2) * Math.PI },
    { x: 7, y: 5, oxCoef: -1, oyCoef: -1 },
    { x: 7, y: 7, oxCoef: -1, oyCoef: -1 },
    { x: 2, y: 7, oxCoef: 1, oyCoef: -1 },
    { x: 0, y: 7, oxCoef: 1, oyCoef: -1 },
    { x: 0, y: 2, oxCoef: 1, oyCoef: 1 },
    { x: 0, y: 0, oxCoef: 1, oyCoef: 1 }
  ];

  const outerCoords = outerPatterns.map(op =>
    createOuterCoord(op, scale, dx, dy, offsetX, offsetY)
  );

  return [innerCoords, outerCoords];
};

export const drawRoundedAngle1 = drawRoundedFinder;
