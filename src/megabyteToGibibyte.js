/** Convert a finite measurement from megabyte to gibibyte. */
export function megabyteToGibibyte(value) {
  if (!Number.isFinite(value)) {
    throw new TypeError("Expected a finite measurement");
  }

  return (value * 1000000) / 1073741824;
}
