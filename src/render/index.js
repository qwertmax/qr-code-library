import get from 'lodash.get';
import merge from 'lodash.merge';
import { DEFAULT_OPTS } from './constants';
import drawImage from './drawImage';
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

const getOffset = (margins = 0, borderSize = 0) => {
  const x = margins + borderSize;
  const y = margins + borderSize;

  return [x, y];
};

export default (bitMatrix, customOptions) => {
  const options = merge(DEFAULT_OPTS, customOptions);
  const { size, data } = bitMatrix;

  const margins = get(options, 'content.margins', 0);
  const borderSize = get(options, 'border.size', 0);
  const scale = Math.floor(
    (options.width - margins * 2 - borderSize * 2) / size
  );
  const offset = getOffset(margins, borderSize);

  const width = scale * size + borderSize * 2 + margins * 2;
  const height = scale * size + borderSize * 2 + margins * 2;
  const canvas = getCanvas();

  canvas.width = width;
  canvas.height = height;

  const ctx = canvas.getContext('2d');

  const dataWithoutFinders = clearFinders(data, size);

  renderContent(ctx, dataWithoutFinders, size, scale, options, offset);
  renderFinders(ctx, size, scale, options, offset);

  const image = get(options, 'content.image');

  if (image) {
    drawImage(ctx, image, size, scale, offset);
  }

  return canvas.toDataURL('image/png');
};
