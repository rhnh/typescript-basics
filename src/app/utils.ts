//utils
export function isOdd(value: number): boolean {
  return isEven(value) ? false : true;
}

//
export function isEven(value: number): boolean {
  return value % 2 === 0;
}

/**
 * O(sqrt(n))
 * @param value number
 */
export function isPrime(value: number): boolean {
  if (value <= 1) return false;
  if (value <= 3) return true; // 2 or 3 => true

  if (value % 2 === 0 || value % 3 === 0) {
    // can be divided by 2 or 3 => false
    return false;
  }
  for (let i = 5; i * i <= value; i = i + 6) {
    //value >= 25 ?
    if (value % i === 0 || value % (i + 2) === 0) {
      return false;
    }
  }
  return true;
}
