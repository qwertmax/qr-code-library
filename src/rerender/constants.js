export const RENDER_TYPES = {
  RECT_DOTS: 'RECT_DOTS',
  ROUND_DOTS: 'ROUND_DOTS'
};

export const FINDER_TYPES = {
  RECT_DOTS: 'RECT_DOTS',
  ROUND_DOTS: 'ROUND_DOTS',
  ROUND: 'ROUND'
};

export const DEFAULT_OPTS = {
  scale: 10
};

export const FINDER_MATRIX = [
  [1, 1, 1, 1, 1, 1, 1],
  [1, 0, 0, 0, 0, 0, 1],
  [1, 0, 1, 1, 1, 0, 1],
  [1, 0, 1, 1, 1, 0, 1],
  [1, 0, 1, 1, 1, 0, 1],
  [1, 0, 0, 0, 0, 0, 1],
  [1, 1, 1, 1, 1, 1, 1]
];
