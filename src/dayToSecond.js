/** Convert a finite measurement from day to second. */
export function dayToSecond(value) {
  if (!Number.isFinite(value)) {
    throw new TypeError("Expected a finite measurement");
  }

  return (value * 86400) / 1;
}
