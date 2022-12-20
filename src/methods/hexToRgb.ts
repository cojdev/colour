import { RGBColour } from '../types';

/**
 * Convert hexadecimal colour to RGB
 * @param {string} hex 3 or 6 digit hexadecimal colour value
 * @returns {array}
 */
const hexToRgb = (hex: string): RGBColour => {
  const formattedHex = hex.replace('#', '');

  switch (formattedHex.length) {
    case 3: {
      return formattedHex
        .split('')
        .map((item: any) => parseInt(item + item, 16)) as RGBColour;
    }

    case 6: {
      return formattedHex
        .match(/.{2}/g)
        .map((item: string) => parseInt(item, 16)) as RGBColour;
    }

    default:
      return [0, 0, 0];
  }
};

export default hexToRgb;
