import { OUTER_FINDER_MATRIX, INNER_FINDER_MATRIX } from '../constants';

export const calculateRoundDots = (scale, [dx, dy]) =>
  [INNER_FINDER_MATRIX, OUTER_FINDER_MATRIX].map(matrix => {
    const coords = [];

    for (let x = 0; x < 7; x++) {
      for (let y = 0; y < 7; y++) {
        if (matrix[y][x]) {
          const r = scale / 2 - 1;

          coords.push({
            r,
            x: (x + dx) * scale + r + 1,
            y: (y + dy) * scale + r + 1
          });
        }
      }
    }

    return coords;
  });

export const drawRoundDots = (
  ctx,
  innerColor,
  outerColor,
  innerCoords,
  outerCoords
) => {
  ctx.fillStyle = innerColor;
  ctx.fillStroke = innerColor;
  innerCoords.forEach(({ x, y, r }) => {
    ctx.beginPath();
    ctx.arc(x, y, r, 0, 2 * Math.PI);
    ctx.fill();
    ctx.stroke();
  });

  ctx.fillStyle = outerColor;
  ctx.fillStroke = outerColor;
  outerCoords.forEach(({ x, y, r }) => {
    ctx.beginPath();
    ctx.arc(x, y, r, 0, 2 * Math.PI);
    ctx.fill();
    ctx.stroke();
  });
};
