/** Convert a finite measurement from kibibyte to tebibyte. */
export function kibibyteToTebibyte(value) {
  if (!Number.isFinite(value)) {
    throw new TypeError("Expected a finite measurement");
  }

  return (value * 1024) / 1099511627776;
}
