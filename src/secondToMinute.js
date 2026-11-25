/** Convert a finite measurement from second to minute. */
export function secondToMinute(value) {
  if (!Number.isFinite(value)) {
    throw new TypeError("Expected a finite measurement");
  }

  return (value * 1) / 60;
}
