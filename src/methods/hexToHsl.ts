import { HSLColour } from '../types';

/**
 * Convert hexadecimal string to hue, saturation and luminosity
 * @param hex hexadecimal colour string; hash optional
 */
const hexToHsl = (hex: string): HSLColour => {
  const formattedHex = hex.replace('#', '');

  let rgb: number[];

  switch (formattedHex.length) {
    case 3:
      rgb = formattedHex
        .split('')
        .map((item: any) => parseInt(item + item, 16));
      break;
    case 6:
      rgb = formattedHex
        .match(/.{2}/g)
        .map((item: string) => parseInt(item, 16));
      break;
    default:
      throw new Error(`Invalid hex string provided: ${hex}`);
  }

  const r = rgb[0] / 255;
  const g = rgb[1] / 255;
  const b = rgb[2] / 255;
  const max = Math.max(r, g, b);
  const min = Math.min(r, g, b);

  let h;
  let s;
  let l = (max + min) / 2;

  if (max === min) {
    h = 0;
    s = 0;
  } else {
    const d = max - min;
    s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
    switch (max) {
      case r:
        h = (g - b) / d + (g < b ? 6 : 0);
        break;
      case g:
        h = (b - r) / d + 2;
        break;
      case b:
        h = (r - g) / d + 4;
        break;
      default:
        return [0, 0, 0];
    }
    h /= 6;
  }

  h = Math.floor(h * 360);
  s = Math.floor(s * 100);
  l = Math.floor(l * 100);

  return [h, s, l];
};

export default hexToHsl;
