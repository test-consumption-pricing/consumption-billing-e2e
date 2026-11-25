/** Convert a finite measurement from gibibyte to terabyte. */
export function gibibyteToTerabyte(value) {
  if (!Number.isFinite(value)) {
    throw new TypeError("Expected a finite measurement");
  }

  return (value * 1073741824) / 1000000000000;
}
