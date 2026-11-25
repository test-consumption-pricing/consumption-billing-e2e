/** Convert a finite measurement from kilobyte to gigabyte. */
export function kilobyteToGigabyte(value) {
  if (!Number.isFinite(value)) {
    throw new TypeError("Expected a finite measurement");
  }

  return (value * 1000) / 1000000000;
}
