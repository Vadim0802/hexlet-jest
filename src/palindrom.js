export default (str) => {
  if (str.length === 0) {
    return null;
  }
  for (let i = 0; i < str.length / 2; i += 1) {
    if (str[i] !== str[str.length - 1 - i]) {
      return false;
    }
  }
  return true;
};
