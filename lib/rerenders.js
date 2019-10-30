const getCanvas = () => {
  try {
    return document.createElement('canvas');
  } catch(e) {
    throw new Error('Canvas element creation problem occurred')
  }
}

const defaultOpts = {
  scale: 10,
}

const dotsRerender = bitMatrix => {
  const { size, data } = bitMatrix;
  const scale = defaultOpts.scale;
  const canvas = getCanvas();
  canvas.width = scale * size;
  canvas.height = scale * size
  const ctx = canvas.getContext('2d');

  data.forEach((value, index) => {
    if (value === 0) {
      return;
    }

    x = index % size * scale;
    y = index / size * scale;

    ctx.fillRect(x, y, x + scale, y + scale);
  })
}

module.exports = {
  dotsRerender
}
