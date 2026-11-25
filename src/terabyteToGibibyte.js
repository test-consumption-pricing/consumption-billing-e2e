/** Convert a finite measurement from terabyte to gibibyte. */
export function terabyteToGibibyte(value) {
  if (!Number.isFinite(value)) {
    throw new TypeError("Expected a finite measurement");
  }

  return (value * 1000000000000) / 1073741824;
}
