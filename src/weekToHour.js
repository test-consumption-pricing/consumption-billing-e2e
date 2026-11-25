/** Convert a finite measurement from week to hour. */
export function weekToHour(value) {
  if (!Number.isFinite(value)) {
    throw new TypeError("Expected a finite measurement");
  }

  return (value * 604800) / 3600;
}
