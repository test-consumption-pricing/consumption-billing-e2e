/** Convert a finite measurement from kilobyte to kibibyte. */
export function kilobyteToKibibyte(value) {
  if (!Number.isFinite(value)) {
    throw new TypeError("Expected a finite measurement");
  }

  return (value * 1000) / 1024;
}
