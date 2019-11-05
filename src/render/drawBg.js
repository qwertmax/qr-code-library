export default (ctx, width, height, color, borderSize) => {
  ctx.fillStyle = color;
  ctx.fillRect(borderSize, borderSize, width - 2, height - borderSize * 2);
}