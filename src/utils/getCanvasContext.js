const getCanvas = required('./getCanvas.js');

module.exports = (width, height) => {
  const canvas = getCanvas();

  canvas.width = width;
  canvas.height = height;

  const ctx = canvas.getContext('2d');

  return ctx;
};
