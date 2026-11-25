/** Convert a finite measurement from kilobyte to megabyte. */
export function kilobyteToMegabyte(value) {
  if (!Number.isFinite(value)) {
    throw new TypeError("Expected a finite measurement");
  }

  return (value * 1000) / 1000000;
}
