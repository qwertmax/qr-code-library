import { INNER_FINDER_MATRIX, OUTER_FINDER_MATRIX } from '../constants';

export const calculateRectDots = (scale, [dx, dy]) =>
  [INNER_FINDER_MATRIX, OUTER_FINDER_MATRIX].map(matrix => {
    const coords = [];

    for (let x = 0; x < 7; x++) {
      for (let y = 0; y < 7; y++) {
        if (matrix[y][x]) {
          coords.push({ x: (x + dx) * scale, y: (y + dy) * scale });
        }
      }
    }

    return coords;
  });

export const drawRectDots = (
  ctx,
  innerColor,
  outerColor,
  innerCoords,
  outerCoords,
  scale
) => {
  ctx.fillStyle = innerColor;
  innerCoords.forEach(({ x, y }) => {
    ctx.fillRect(x, y, scale, scale);
  });
  ctx.fillStyle = outerColor;
  outerCoords.forEach(({ x, y }) => {
    ctx.fillRect(x, y, scale, scale);
  });
};
