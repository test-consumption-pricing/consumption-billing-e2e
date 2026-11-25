/** Convert a finite measurement from millisecond to microsecond. */
export function millisecondToMicrosecond(value) {
  if (!Number.isFinite(value)) {
    throw new TypeError("Expected a finite measurement");
  }

  return (value * 0.001) / 1e-06;
}
