import { RENDER_TYPES, DEFAULT_OPTS } from './constants';
import renderContent from './content/renderContent';
import renderFinders from './finders/renderFinders';
import getCanvas from '../utils/getCanvas';

const clearFinders = (data, size) =>
  data.map((v, idx) => {
    if (v === 0) {
      return v;
    }

    const x = idx % size;
    const y = Math.floor(idx / size);

    if (y < 7 && (x < 7 || x >= size - 7)) {
      return 0;
    }

    if (y >= size - 7 && x < 7) {
      return 0;
    }

    return v;
  });

export default (
  bitMatrix,
  { type = RENDER_TYPES.RECT_DOTS, content, finders, border }
) => {
  const { size, data } = bitMatrix;
  const scale = DEFAULT_OPTS.scale;

  const width = scale * size;
  const height = scale * size;
  const canvas = getCanvas();

  canvas.width = width;
  canvas.height = height;

  const ctx = canvas.getContext('2d');

  const dataWithoutFinders = clearFinders(data, size);

  renderContent(ctx, dataWithoutFinders, size, scale, type, content);
  renderFinders(ctx, size, scale, type, finders);

  return canvas.toDataURL('image/png');
};
