import get from 'lodash.get';
import { DEFAULT_OPTS } from './constants';
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

const getOffset = (margins = 0, paddings = 0) => {
  const x = margins + paddings;
  const y = margins + paddings;

  return [x, y];
};

export default (bitMatrix, customOptions) => {
  const options = { ...DEFAULT_OPTS, ...customOptions };
  const { size, data } = bitMatrix;

  const margins = get(options, 'content.margins', 0);
  const paddings = get(options, 'border.paddings', 0);
  const scale = Math.floor((options.width - margins * 2 - paddings * 2) / size);
  const offset = getOffset(margins, paddings);

  const width = scale * size + paddings * 2 + margins * 2;
  const height = scale * size + paddings * 2 + margins * 2;
  const canvas = getCanvas();

  canvas.width = width;
  canvas.height = height;

  const ctx = canvas.getContext('2d');

  const dataWithoutFinders = clearFinders(data, size);

  renderContent(ctx, dataWithoutFinders, size, scale, type, options, offset);
  renderFinders(ctx, size, scale, type, options, offset);

  return canvas.toDataURL('image/png');
};
