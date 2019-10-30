const getCanvas = () => {
  try {
    return document.createElement('canvas');
  } catch (e) {
    throw new Error('Canvas element creation problem occurred');
  }
};

const defaultOpts = {
  scale: 10
};

const dotsRerender = bitMatrix => {
  const { size, data } = bitMatrix;
  const scale = defaultOpts.scale;
  const canvas = getCanvas();
  canvas.width = scale * size;
  canvas.height = scale * size;
  const ctx = canvas.getContext('2d');

  data.forEach((value, index) => {
    if (!value) {
      return;
    }

    const x = (index % size) * scale;
    const y = Math.floor(index / size) * scale;

    ctx.fillRect(x, y, scale, scale);
  });
};

const roundDotsRerender = bitMatrix => {
  const { size, data } = bitMatrix;
  const scale = defaultOpts.scale;
  const canvas = getCanvas();
  canvas.width = scale * size;
  canvas.height = scale * size;
  const ctx = canvas.getContext('2d');

  data.forEach((value, index) => {
    if (!value) {
      return;
    }

    const r = scale / 2 - 1;
    const x = (index % size) * scale + r + 1;
    const y = Math.floor(index / size) * scale + r + 1;

    ctx.beginPath();
    ctx.arc(x, y, r, 0, 2 * Math.PI);
    ctx.fill();
    ctx.stroke();
  });
};

module.exports = {
  dotsRerender,
  roundDotsRerender
};
