/** Convert a finite measurement from kibibyte to byte. */
export function kibibyteToByte(value) {
  if (!Number.isFinite(value)) {
    throw new TypeError("Expected a finite measurement");
  }

  return (value * 1024) / 1;
}
