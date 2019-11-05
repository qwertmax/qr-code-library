// image should be CSSImageValue, HTMLImageElement, SVGImageElement, 
// HTMLVideoElement, HTMLCanvasElement, ImageBitmap or OffscreenCanvas.

export default (ctx, image, size, scale, [offsetX, offsetY]) => {
  const width = Math.floor((size * scale) / 3);
  const height = Math.floor((size * scale) / 3);
  const dx = (size * scale - width) / 2 + offsetX;
  const dy = (size * scale - height) / 2 + offsetY;

    ctx.drawImage(image, dx, dy, width, height);
};
