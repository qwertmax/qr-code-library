export const calculateRoundDots = (data, size, scale, [offsetX, offsetY]) =>
  data.reduce((acc, value, index) => {
    if (!value) {
      return acc;
    }

    const r = scale / 2 - 1;
    const x = (index % size) * scale + r + 1 + offsetX;
    const y = Math.floor(index / size) * scale + r + 1 + offsetY;

    return [...acc, { x, y, r }];
  }, []);

export const drawRoundDots = (ctx, coords, options) => {
  ctx.fillStyle = options.content.color;
  coords.forEach(({ x, y, r }) => {
    ctx.beginPath();
    ctx.arc(x, y, r, 0, 2 * Math.PI);
    ctx.fill();
    ctx.stroke();
  });
};
