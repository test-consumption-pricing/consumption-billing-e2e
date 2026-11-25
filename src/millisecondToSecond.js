/** Convert a finite measurement from millisecond to second. */
export function millisecondToSecond(value) {
  if (!Number.isFinite(value)) {
    throw new TypeError("Expected a finite measurement");
  }

  return (value * 0.001) / 1;
}
