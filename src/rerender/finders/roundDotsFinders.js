import { FINDER_MATRIX } from '../constants';

export const calculateRoundDots = (size, scale) => {
  const finderCoords = [[size - 7, 0], [0, 0], [0, size - 7]].reduce(
    (acc, [dx, dy]) => {
      const coordsPart = [];

      for (let x = 0; x < 7; x++) {
        for (let y = 0; y < 7; y++) {
          if (FINDER_MATRIX[y][x]) {
            const r = scale / 2 - 1;

            coordsPart.push({
              r,
              x: (x + dx) * scale + r + 1,
              y: (y + dy) * scale + r + 1
            });
          }
        }
      }

      return acc.concat(coordsPart);
    },
    []
  );

  return finderCoords;
};

export const drawRoundDots = (ctx, coords) =>
  coords.forEach(({ x, y, r }) => {
    ctx.beginPath();
    ctx.arc(x, y, r, 0, 2 * Math.PI);
    ctx.fill();
    ctx.stroke();
  });
