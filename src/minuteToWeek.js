/** Convert a finite measurement from minute to week. */
export function minuteToWeek(value) {
  if (!Number.isFinite(value)) {
    throw new TypeError("Expected a finite measurement");
  }

  return (value * 60) / 604800;
}
