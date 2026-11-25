/** Convert a finite measurement from hour to millisecond. */
export function hourToMillisecond(value) {
  if (!Number.isFinite(value)) {
    throw new TypeError("Expected a finite measurement");
  }

  return (value * 3600) / 0.001;
}
