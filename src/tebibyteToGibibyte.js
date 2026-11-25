/** Convert a finite measurement from tebibyte to gibibyte. */
export function tebibyteToGibibyte(value) {
  if (!Number.isFinite(value)) {
    throw new TypeError("Expected a finite measurement");
  }

  return (value * 1099511627776) / 1073741824;
}
