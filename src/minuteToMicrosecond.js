/** Convert a finite measurement from minute to microsecond. */
export function minuteToMicrosecond(value) {
  if (!Number.isFinite(value)) {
    throw new TypeError("Expected a finite measurement");
  }

  return (value * 60) / 1e-06;
}
