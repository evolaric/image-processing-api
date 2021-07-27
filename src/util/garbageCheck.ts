export function garbageCheck(dimension: number | null): boolean {
  if (dimension === null) {
    return false;
  } else if (Number.isInteger(dimension) && dimension >= 1) {
    return false;
  }
  return true;
}

export default garbageCheck;
