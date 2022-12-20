import hslToHex from './hslToHex';

/**
 * get a random hexadecimal colour
 * @param bright whether to return a bright colour
 * @returns hexadecimal colour
 */
const getRandomHex = (bright: boolean = false): string => {
  if (bright) {
    return hslToHex(Math.floor(Math.random() * 360), 85, 53);
  }

  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
};

export default getRandomHex;
