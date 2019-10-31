export default () => {
  try {
    return document.createElement('canvas');
  } catch (e) {
    throw new Error('Canvas element creation problem occurred');
  }
};
