/**
 * Convert rgb to hexadecimal
 * @param r red, green and blue array or red component
 * @param g green component
 * @param b blue component
 * @returns hex string
 */
const rgbToHex = (
  red: number[] | number,
  green?: number,
  blue?: number
): string => {
  let rgb;

  if (Array.isArray(red)) {
    rgb = red;
  } else {
    rgb = [red, green, blue];
  }

  let ret = '#';
  const components = rgb.map((item) => {
    const temp = item.toString(16);
    if (temp.length === 1) {
      return `0${temp}`;
    }
    return temp;
  });
  ret += components.join('');
  return ret;
};

export default rgbToHex;
