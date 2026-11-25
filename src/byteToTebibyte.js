/** Convert a finite measurement from byte to tebibyte. */
export function byteToTebibyte(value) {
  if (!Number.isFinite(value)) {
    throw new TypeError("Expected a finite measurement");
  }

  return (value * 1) / 1099511627776;
}
