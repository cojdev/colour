import getRandomHex from './getRandomHex';
import hexToRgb from './hexToRgb';
import hslToCss from './hslToCss';
import hslToHex from './hslToHex';
import hslToRgb from './hslToRgb';
import rgbToHex from './rgbToHex';

describe('rgbToHex', () => {
  it('should convert an rgb array to a hex string', () => {
    const result = rgbToHex([255, 0, 0]);
    expect(result).toEqual('#ff0000');
  });

  it('should convert rgb values to a hex string', () => {
    const result = rgbToHex(255, 0, 0);
    expect(result).toEqual('#ff0000');
  });
});

describe('hexToRgb', () => {
  it('should convert a hex string to an rgb array', () => {
    const result = hexToRgb('#ff0000');
    expect(result).toEqual([255, 0, 0]);
  });
});

describe('hslToCss', () => {
  it('should convert hsl values to a css string', () => {
    const result = hslToCss(0, 100, 50);
    expect(result).toEqual('hsl(0,100%,50%)');
  });
});

describe('hslToRgb', () => {
  it('should convert hsl values to an rgb array', () => {
    const result = hslToRgb(0, 100, 50);
    expect(result).toEqual([255, 0, 0]);
  });

  it('should convert an hsl array to an rgb array', () => {
    const result = hslToRgb([0, 100, 50]);
    expect(result).toEqual([255, 0, 0]);
  });
});

describe('hslToHex', () => {
  it('should convert hsl values to a hex string', () => {
    const result = hslToHex(0, 100, 50);
    expect(result).toEqual('#ff0000');
  });

  it('should convert an hsl array to a hex string', () => {
    const result = hslToHex([0, 100, 50]);
    expect(result).toEqual('#ff0000');
  });
});

describe('getRandomHex', () => {
  it('should return a random hex colour', () => {
    const result = getRandomHex();
    expect(result).toMatch(/^#[0-9a-f]{6}$/);
  });

  it('should return a random bright hex colour', () => {
    const result = getRandomHex(true);
    expect(result).toMatch(/^#[0-9a-f]{6}$/);
  });
});
