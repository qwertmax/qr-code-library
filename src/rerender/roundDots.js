const calculateRoundDots = (data, size, scale) => {
  data.reduce((acc, value, index) => {
    if (!value) {
      return acc;
    }

    const r = scale / 2 - 1;
    const x = (index % size) * scale + r + 1;
    const y = Math.floor(index / size) * scale + r + 1;

    return [...acc, { x, y, r }];
  }, []);
};

const drawRoundDots = (ctx, coords) =>
  coords.forEach(({ x, y, r }) => {
    ctx.beginPath();
    ctx.arc(x, y, r, 0, 2 * Math.PI);
    ctx.fill();
    ctx.stroke();
  });

module.exports = {
  calculateRoundDots,
  drawRoundDots
};
