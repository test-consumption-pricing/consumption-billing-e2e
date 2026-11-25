/** Convert a finite measurement from mebibyte to byte. */
export function mebibyteToByte(value) {
  if (!Number.isFinite(value)) {
    throw new TypeError("Expected a finite measurement");
  }

  return (value * 1048576) / 1;
}
