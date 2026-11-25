/** Convert a finite measurement from day to hour. */
export function dayToHour(value) {
  if (!Number.isFinite(value)) {
    throw new TypeError("Expected a finite measurement");
  }

  return (value * 86400) / 3600;
}
