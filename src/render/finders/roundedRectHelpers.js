export const transform = (d, scale, offset) => d * scale + offset;

export const createInnerCoord = (pattern, scale, dx, dy, offsetX, offsetY) => ({
  x: transform(pattern.x + dx, scale, offsetX),
  y: transform(pattern.y + dy, scale, offsetY),
  startAngle: pattern.angle
});

export const createOuterCoord = (pattern, scale, dx, dy, offsetX, offsetY) => {
  const oOffset = scale / 2;

  return {
    x: transform(pattern.x + dx, scale, offsetX + pattern.oxCoef * oOffset),
    y: transform(pattern.y + dy, scale, offsetY + pattern.oyCoef * oOffset),
    startAngle: pattern.angle
  };
};

export const setupRoundedRect = (ctx, coords, r) => {
  ctx.beginPath();

  if (!coords.length) return;

  ctx.moveTo(coords[0].x, coords[0].y);
  coords.slice(1).forEach(coord => {
    if (coord.startAngle !== undefined) {
      ctx.arc(
        coord.x,
        coord.y,
        r,
        coord.startAngle,
        coord.startAngle + (1 / 2) * Math.PI
      );
      return;
    }
    ctx.lineTo(coord.x, coord.y);
  });

  ctx.closePath();
};

export const drawRoundedFinder = (
  ctx,
  innerColor,
  outerColor,
  innerCoords,
  outerCoords,
  scale
) => {
  const outerRadius = scale * 2;
  const innerRadius = scale;

  ctx.lineWidth = scale;
  ctx.strokeStyle = outerColor;
  setupRoundedRect(ctx, outerCoords, outerRadius);
  ctx.stroke();

  ctx.lineWidth = 1;
  ctx.fillStyle = innerColor;
  setupRoundedRect(ctx, innerCoords, innerRadius);
  ctx.fill();
};
