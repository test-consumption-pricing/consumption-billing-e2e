/** Convert a finite measurement from kilobyte to tebibyte. */
export function kilobyteToTebibyte(value) {
  if (!Number.isFinite(value)) {
    throw new TypeError("Expected a finite measurement");
  }

  return (value * 1000) / 1099511627776;
}
