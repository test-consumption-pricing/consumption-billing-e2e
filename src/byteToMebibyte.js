/** Convert a finite measurement from byte to mebibyte. */
export function byteToMebibyte(value) {
  if (!Number.isFinite(value)) {
    throw new TypeError("Expected a finite measurement");
  }

  return (value * 1) / 1048576;
}
