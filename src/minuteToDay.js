/** Convert a finite measurement from minute to day. */
export function minuteToDay(value) {
  if (!Number.isFinite(value)) {
    throw new TypeError("Expected a finite measurement");
  }

  return (value * 60) / 86400;
}
