const hexCharacters = `a-f\\d`;
const match3or4Hex = `#?[${hexCharacters}]{3}[${hexCharacters}]?`;
const match6or8Hex = `#?[${hexCharacters}]{6}([${hexCharacters}]{2})?`;
const nonHexChars = new RegExp(`[^#${hexCharacters}]`, `gi`);
const validHexSize = new RegExp(`^${match3or4Hex}$|^${match6or8Hex}$`, `i`);

export default function hexToRGB(hex: string): [number, number, number] {
  if (
    typeof hex !== `string` ||
    nonHexChars.test(hex) ||
    !validHexSize.test(hex)
  ) {
    throw new TypeError(`Expected a valid hex string`);
  }

  let hexProcessed;

  hexProcessed = hex.replace(/^#/, ``);

  if (hexProcessed.length === 3) {
    hexProcessed =
      hexProcessed[0] +
      hexProcessed[0] +
      hexProcessed[1] +
      hexProcessed[1] +
      hexProcessed[2] +
      hexProcessed[2];
  }

  const number = Number.parseInt(hexProcessed, 16);

  // eslint-disable-next-line no-bitwise
  const red = number >> 16;

  // eslint-disable-next-line no-bitwise
  const green = (number >> 8) & 255;

  // eslint-disable-next-line no-bitwise
  const blue = number & 255;

  return [red, green, blue];
}
