/** Convert a finite measurement from gibibyte to byte. */
export function gibibyteToByte(value) {
  if (!Number.isFinite(value)) {
    throw new TypeError("Expected a finite measurement");
  }

  return (value * 1073741824) / 1;
}
