export const calculateRectDots = (data, size, scale) =>
  data.reduce((acc, value, index) => {
    if (!value) {
      return acc;
    }

    const x = (index % size) * scale;
    const y = Math.floor(index / size) * scale;

    return [...acc, { x, y }];
  }, []);

export const drawRectDots = (ctx, coords, scale) => {
  coords.forEach(({ x, y }) => {
    ctx.fillRect(x, y, scale, scale);
  });
};
