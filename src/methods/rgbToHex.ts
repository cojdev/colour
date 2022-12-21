import { HexColour, RGBColour } from '../types';

/**
 * Convert rgb to hexadecimal
 * @param red red, green and blue array or red component
 * @param green green component
 * @param blue blue component
 * @returns hex string
 */
const rgbToHex = (
  red: RGBColour | number,
  green?: number,
  blue?: number
): HexColour => {
  let rgb;

  if (Array.isArray(red)) {
    rgb = red;
  } else {
    rgb = [red, green, blue];
  }

  const components = rgb.map((item) => {
    const temp = item.toString(16);
    if (temp.length === 1) {
      return `0${temp}`;
    }
    return temp;
  });

  return `#${components.join('')}`;
};

export default rgbToHex;
