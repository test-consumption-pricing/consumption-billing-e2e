/** Convert a finite measurement from millisecond to hour. */
export function millisecondToHour(value) {
  if (!Number.isFinite(value)) {
    throw new TypeError("Expected a finite measurement");
  }

  return (value * 0.001) / 3600;
}
