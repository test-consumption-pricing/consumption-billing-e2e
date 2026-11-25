/** Convert a finite measurement from mebibyte to gibibyte. */
export function mebibyteToGibibyte(value) {
  if (!Number.isFinite(value)) {
    throw new TypeError("Expected a finite measurement");
  }

  return (value * 1048576) / 1073741824;
}
