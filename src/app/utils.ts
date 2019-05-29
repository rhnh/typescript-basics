export function LeibnizSeries(value: number): number {
  /**
   * π/4 = 1/1 - 1/3 + 1/5 - 1 /7 + 1/9 ± ...
   */
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

export function sumOfOddNumbers(value: number): number {
  /**
   * 1+3+5....
   */
  let sum: number = 0;
  for (let i: number = 0; i <= value; i++) {
    if (oddNumber(i)) {
      sum += i;
    }
  }
  return sum;
}

export function harmonicSeries(value: number): number {
  /**
   * 1 + 1/2+ 1/3 + 1/4 ...
   */
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
