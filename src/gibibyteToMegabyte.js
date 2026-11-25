/** Convert a finite measurement from gibibyte to megabyte. */
export function gibibyteToMegabyte(value) {
  if (!Number.isFinite(value)) {
    throw new TypeError("Expected a finite measurement");
  }

  return (value * 1073741824) / 1000000;
}
