/** Convert a finite measurement from second to microsecond. */
export function secondToMicrosecond(value) {
  if (!Number.isFinite(value)) {
    throw new TypeError("Expected a finite measurement");
  }

  return (value * 1) / 1e-06;
}
