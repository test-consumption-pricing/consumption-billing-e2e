/** Convert a finite measurement from byte to gibibyte. */
export function byteToGibibyte(value) {
  if (!Number.isFinite(value)) {
    throw new TypeError("Expected a finite measurement");
  }

  return (value * 1) / 1073741824;
}
