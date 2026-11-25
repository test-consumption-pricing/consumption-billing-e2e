/** Convert a finite measurement from mebibyte to kilobyte. */
export function mebibyteToKilobyte(value) {
  if (!Number.isFinite(value)) {
    throw new TypeError("Expected a finite measurement");
  }

  return (value * 1048576) / 1000;
}
