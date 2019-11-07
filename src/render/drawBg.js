export default (ctx, width, height, color, borderSize) => {
  ctx.fillStyle = color;
  ctx.fillRect(
    borderSize,
    borderSize,
    width - 2 * borderSize, // width
    height - 2 * borderSize // height
  );
};
