import get from 'lodash.get';

export const calculateRectDots = (data, size, scale, [offsetX, offsetY]) =>
  data.reduce((acc, value, index) => {
    if (!value) {
      return acc;
    }

    const x = (index % size) * scale + offsetX;
    const y = Math.floor(index / size) * scale + offsetY;

    return [...acc, { x, y }];
  }, []);

export const drawRectDots = (ctx, coords, scale, options) => {
  ctx.fillStyle = get(options, 'content.color');
  coords.forEach(({ x, y }) => {
    ctx.fillRect(x, y, scale, scale);
  });
};
