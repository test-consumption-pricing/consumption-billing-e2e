/** Convert a finite measurement from hour to microsecond. */
export function hourToMicrosecond(value) {
  if (!Number.isFinite(value)) {
    throw new TypeError("Expected a finite measurement");
  }

  return (value * 3600) / 1e-06;
}
