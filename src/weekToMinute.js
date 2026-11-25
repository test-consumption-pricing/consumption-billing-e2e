/** Convert a finite measurement from week to minute. */
export function weekToMinute(value) {
  if (!Number.isFinite(value)) {
    throw new TypeError("Expected a finite measurement");
  }

  return (value * 604800) / 60;
}
