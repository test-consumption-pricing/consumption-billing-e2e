/** Convert a finite measurement from tebibyte to kilobyte. */
export function tebibyteToKilobyte(value) {
  if (!Number.isFinite(value)) {
    throw new TypeError("Expected a finite measurement");
  }

  return (value * 1099511627776) / 1000;
}
