export const RENDER_TYPES = {
  RECT_DOTS: 'RECT_DOTS',
  ROUND_DOTS: 'ROUND_DOTS'
};

export const FINDER_TYPES = {
  RECT_DOTS: 'RECT_DOTS',
  ROUND_DOTS: 'ROUND_DOTS',
  ROUND: 'ROUND',
  ROUNDED_RECT: 'ROUNDED_RECT',
  ROUNDED_ANGLE_1: 'ROUNDED_ANGLE_1',
  ROUNDED_ANGLE_2: 'ROUNDED_ANGLE_2',
  ROUNDED_ANGLE_3: 'ROUNDED_ANGLE_3',
  TWO_ROUNDED_ANGLES_1: 'TWO_ROUNDED_ANGLES_1',
  TWO_ROUNDED_ANGLES_2: 'TWO_ROUNDED_ANGLES_2',
  RECT_ANGLE_1: 'RECT_ANGLE_1',
  RECT_ANGLE_2: 'RECT_ANGLE_2',
  RECT_ANGLE_3: 'RECT_ANGLE_3',
  RECT_ANGLE_4: 'RECT_ANGLE_4'
};

export const DEFAULT_OPTS = {
  width: 200,
  type: RENDER_TYPES.RECT_DOTS,
  content: {
    color: 'black',
    margins: 20
  },
  border: {
    size: 0,
    paddings: 0
  },
  finders: {
    type: FINDER_TYPES.RECT_DOTS
  }
};

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
