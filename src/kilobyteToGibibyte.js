/** Convert a finite measurement from kilobyte to gibibyte. */
export function kilobyteToGibibyte(value) {
  if (!Number.isFinite(value)) {
    throw new TypeError("Expected a finite measurement");
  }

  return (value * 1000) / 1073741824;
}
