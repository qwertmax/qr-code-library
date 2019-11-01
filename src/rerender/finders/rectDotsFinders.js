import { FINDER_MATRIX } from '../constants';

export const calculateRectDots = (size, scale) => {
  const finderCoords = [[size - 7, 0], [0, 0], [0, size - 7]].reduce(
    (acc, [dx, dy]) => {
      const coordsPart = [];

      for (let x = 0; x < 7; x++) {
        for (let y = 0; y < 7; y++) {
          if (FINDER_MATRIX[y][x]) {
            coordsPart.push({ x: (x + dx) * scale, y: (y + dy) * scale });
          }
        }
      }

      return acc.concat(coordsPart);
    },
    []
  );

  return finderCoords;
};

export const drawRectDots = (ctx, coords, scale) => {
  coords.forEach(({ x, y }) => {
    ctx.fillRect(x, y, scale, scale);
  });
};
