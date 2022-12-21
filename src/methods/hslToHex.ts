import { HexColour, HSLColour } from '../types';
import hslToRgb from './hslToRgb';
import rgbToHex from './rgbToHex';

/**
 * Convert hue, saturation and luminosity to hexadecimal
 * @param {number | array} hue hue (hsl if array) 0-360
 * @param {number} sat saturation 0-100
 * @param {number} lum luminosity 0-100
 * @returns {string}
 */
const hslToHex = (
  hue: HSLColour | number,
  sat?: number,
  lum?: number
): HexColour => {
  let h: number;
  let s: number;
  let l: number;

  if (Array.isArray(hue)) {
    [h, s, l] = hue;
  } else {
    h = hue;
    s = sat;
    l = lum;
  }

  return rgbToHex(hslToRgb(h, s, l)) as HexColour;
};

export default hslToHex;
