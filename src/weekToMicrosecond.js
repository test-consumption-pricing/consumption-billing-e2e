/** Convert a finite measurement from week to microsecond. */
export function weekToMicrosecond(value) {
  if (!Number.isFinite(value)) {
    throw new TypeError("Expected a finite measurement");
  }

  return (value * 604800) / 1e-06;
}
