/** Convert a finite measurement from week to second. */
export function weekToSecond(value) {
  if (!Number.isFinite(value)) {
    throw new TypeError("Expected a finite measurement");
  }

  return (value * 604800) / 1;
}
