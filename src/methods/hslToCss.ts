/**
 * const hsl number to a css string
 * @param h hue 0-360
 * @param s saturation 0-100
 * @param l luminosity 0-100
 * @returns hsl css string
 */
const hslToCss = (h: number, s: number, l: number): string =>
  `hsl(${h},${s}%,${l}%)`;

export default hslToCss;
