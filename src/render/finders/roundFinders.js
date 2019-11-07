export const calculateRounds = (scale, [dx, dy], [offsetX, offsetY]) => {
  const outerRadius = 3 * scale - 1;
  const innerRadius = 1.5 * scale - 1;
  const centerX = (3.5 + dx) * scale + 1 + offsetX;
  const centerY = (3.5 + dy) * scale + 1 + offsetY;
  const outerRadiusWidth = scale;

  const innerRound = {
    x: centerX,
    y: centerY,
    r: innerRadius
  };

  const outerRound = {
    x: centerX,
    y: centerY,
    r: outerRadius,
    width: outerRadiusWidth
  };

  return [[innerRound], [outerRound]];
};

export const drawRounds = (
  ctx,
  innerColor,
  outerColor,
  [innerCoords],
  [outerCoords]
) => {
  if (outerCoords) {
    ctx.beginPath();
    ctx.strokeStyle = outerColor;
    ctx.lineWidth = outerCoords.width;
    ctx.arc(outerCoords.x, outerCoords.y, outerCoords.r, 0, 2 * Math.PI);
    ctx.stroke();
  }

  if (innerCoords) {
    ctx.beginPath();
    ctx.strokeStyle = innerColor;
    ctx.fillStyle = innerColor;
    ctx.lineWidth = 1;
    ctx.arc(innerCoords.x, innerCoords.y, innerCoords.r, 0, 2 * Math.PI);
    ctx.fill();
  }
};
