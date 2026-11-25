/** Convert a finite measurement from minute to hour. */
export function minuteToHour(value) {
  if (!Number.isFinite(value)) {
    throw new TypeError("Expected a finite measurement");
  }

  return (value * 60) / 3600;
}
