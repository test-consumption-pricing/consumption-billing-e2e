/** Convert a finite measurement from week to millisecond. */
export function weekToMillisecond(value) {
  if (!Number.isFinite(value)) {
    throw new TypeError("Expected a finite measurement");
  }

  return (value * 604800) / 0.001;
}
