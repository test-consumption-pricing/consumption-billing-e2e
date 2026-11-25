/** Convert a finite measurement from day to microsecond. */
export function dayToMicrosecond(value) {
  if (!Number.isFinite(value)) {
    throw new TypeError("Expected a finite measurement");
  }

  return (value * 86400) / 1e-06;
}
