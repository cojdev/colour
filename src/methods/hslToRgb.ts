import { HSLColour, RGBColour } from '../types';

/**
 * Convert hsl to rgb
 * @param hue hue (hsl if array) 0-360
 * @param sat saturation 0-100
 * @param lum luminosity 0-100
 * @returns RGB array [r, g, b] 0-255
 */
const hslToRgb = (
  hue: HSLColour | number,
  sat?: number,
  lum?: number
): RGBColour => {
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

  // normalise values
  h /= 360;
  s /= 100;
  l /= 100;

  let rgb = [];
  let c = 0;
  let x = 0;
  let m = 0;

  c = (1 - Math.abs(2 * l - 1)) * s;

  const h1 = h / 60;

  x = c * (1 - Math.abs((h1 % 2) - 1));

  if (h1 >= 0 && h1 <= 1) {
    rgb = [c, x, 0];
  } else if (h1 >= 1 && h1 <= 2) {
    rgb = [x, c, 0];
  } else if (h1 >= 2 && h1 <= 3) {
    rgb = [0, c, x];
  } else if (h1 >= 3 && h1 <= 4) {
    rgb = [0, x, c];
  } else if (h1 >= 4 && h1 <= 5) {
    rgb = [x, 0, c];
  } else if (h1 >= 5 && h1 <= 6) {
    rgb = [c, 0, x];
  } else {
    rgb = [0, 0, 0];
  }

  m = l - c / 2;

  // covert to 0-255
  return rgb.map((item) => Math.floor((item + m) * 255)) as RGBColour;
};

export default hslToRgb;
