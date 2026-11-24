/** Count groups of items for the synthetic review fixture. */
export function countGroups(itemCount, groupSize) {
  if (!Number.isSafeInteger(itemCount) || itemCount < 0) {
    throw new RangeError("itemCount must be a nonnegative integer");
  }
  if (!Number.isSafeInteger(groupSize) || groupSize < 1) {
    throw new RangeError("groupSize must be a positive integer");
  }
  return Math.ceil(itemCount / groupSize);
}
