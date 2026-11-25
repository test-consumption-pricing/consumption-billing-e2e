/** Convert a finite measurement from minute to millisecond. */
export function minuteToMillisecond(value) {
  if (!Number.isFinite(value)) {
    throw new TypeError("Expected a finite measurement");
  }

  return (value * 60) / 0.001;
}
