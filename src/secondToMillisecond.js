/** Convert a finite measurement from second to millisecond. */
export function secondToMillisecond(value) {
  if (!Number.isFinite(value)) {
    throw new TypeError("Expected a finite measurement");
  }

  return (value * 1) / 0.001;
}
