import { HSLColour } from '../types';

/**
 * Convert hue, saturation and luminosity to hexadecimal
 * @param {number | array} hue hue (hsl if array)
 * @param {number} sat saturation
 * @param {number} lum luminosity
 * @returns {string}
 */
const hslToHex = (
  hue: HSLColour | number,
  sat?: number,
  lum?: number
): string => {
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

  h /= 360;
  s /= 100;
  l /= 100;

  let r = l;
  let g = l;
  let b = l;

  if (s !== 0) {
    const hue2rgb = (p: number, q: number, t: number) => {
      let t2 = t;
      if (t < 0) t2 += 1;
      if (t > 1) t2 -= 1;
      if (t < 1 / 6) return p + (q - p) * 6 * t2;
      if (t < 1 / 2) return q;
      if (t < 2 / 3) return p + (q - p) * (2 / 3 - t2) * 6;
      return p;
    };

    const q = l < 0.5 ? l * (1 + s) : l + s - l * s;
    const p = 2 * l - q;
    r = hue2rgb(p, q, h + 1 / 3);
    g = hue2rgb(p, q, h);
    b = hue2rgb(p, q, h - 1 / 3);
  }

  const toHex = (x: number) => {
    const hex = Math.round(x * 255).toString(16);
    return hex.length === 1 ? `0${hex}` : hex;
  };
  return `#${toHex(r)}${toHex(g)}${toHex(b)}`;
};

export default hslToHex;
