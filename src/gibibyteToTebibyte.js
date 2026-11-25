/** Convert a finite measurement from gibibyte to tebibyte. */
export function gibibyteToTebibyte(value) {
  if (!Number.isFinite(value)) {
    throw new TypeError("Expected a finite measurement");
  }

  return (value * 1073741824) / 1099511627776;
}
