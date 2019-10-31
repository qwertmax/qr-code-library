const getCanvas = required('./getCanvas.js');

export default (width, height) => {
  const canvas = getCanvas();

  canvas.width = width;
  canvas.height = height;

  const ctx = canvas.getContext('2d');

  return ctx;
};
