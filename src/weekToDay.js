/** Convert a finite measurement from week to day. */
export function weekToDay(value) {
  if (!Number.isFinite(value)) {
    throw new TypeError("Expected a finite measurement");
  }

  return (value * 604800) / 86400;
}
