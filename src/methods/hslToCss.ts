/**
 * const hsl number to a css string
 * @param h hue
 * @param s saturation
 * @param l luminosity
 * @returns hsl css string
 */
const hslToCss = (h: number, s: number, l: number) => `hsl(${h},${s}%,${l}%)`;

export default hslToCss;
