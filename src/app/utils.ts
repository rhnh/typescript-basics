/**
 * π/4 = 1/1 - 1/3 + 1/5 - 1 /7 + 1/9 ± ...
 */
export function LeibnizSeries(value: number): number {
  let sum: number = 0;

  for (let i: number = 1; i < 2 * value; i++) {
    if (oddNumber(i)) {
      sum *= -1;
      sum += 1 / i;
    }
  }
  if (sum < 0) {
    sum *= -1;
  }
  return (sum *= 4);
}

/**
 *  e^x = 1 + x + x^2/2! + x^3/3! + x^4/4! + x^5/5! +... + x^n/n!
 * @param x number
 * @param n number
 */
export function exponentialSeries(x: number, n: number): number {
  let result: number = 1;
  let e: number = 1;
  for (let i: number = 1; i <= n; i++) {
    result *= x / i; // the numerator constant (x) and the  denominator variable (i) will be multiplied
    e += result;
  }
  return e;
}

/**
 * 1+3+5....
 */
export function sumOfOddNumbers(value: number): number {
  let sum: number = 0;
  for (let i: number = 0; i <= value; i++) {
    if (oddNumber(i)) {
      sum += i;
    }
  }
  return sum;
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

/**
 * 1 + 1/2+ 1/3 + 1/4 ...
 */
export function harmonicSeries(value: number): number {
  let sum: number = 0;
  for (let i: number = 1; i <= value; i++) {
    sum += 1 / i;
  }
  return sum;
}

//utils
function oddNumber(value: number): boolean {
  if (!evenNumber(value)) {
    return true;
  }
  return false;
}

function evenNumber(value: number): boolean {
  if (value % 2 === 0) {
    return true;
  }
  return false;
}
