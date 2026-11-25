/** Convert a finite measurement from microsecond to second. */
export function microsecondToSecond(value) {
  if (!Number.isFinite(value)) {
    throw new TypeError("Expected a finite measurement");
  }

  return (value * 1e-06) / 1;
}
