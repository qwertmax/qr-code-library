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
  width: 200,
  type: RENDER_TYPES.RECT_DOTS,
  content: {
    color: 'black',
    margin: 20
  },
  border: {
    size: 0,
    paddings: 0
  },
  finders: {
    type: FINDER_TYPES.ROUND,
    innerColor: 'black',
    outerColor: 'black'
  }
}

export const OUTER_FINDER_MATRIX = [
  [1, 1, 1, 1, 1, 1, 1],
  [1, 0, 0, 0, 0, 0, 1],
  [1, 0, 0, 0, 0, 0, 1],
  [1, 0, 0, 0, 0, 0, 1],
  [1, 0, 0, 0, 0, 0, 1],
  [1, 0, 0, 0, 0, 0, 1],
  [1, 1, 1, 1, 1, 1, 1]
];

export const INNER_FINDER_MATRIX = [
  [0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0],
  [0, 0, 1, 1, 1, 0, 0],
  [0, 0, 1, 1, 1, 0, 0],
  [0, 0, 1, 1, 1, 0, 0],
  [0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0]
];
