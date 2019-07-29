import { memoizedFactorial } from "./memoizedFactorial";

//########################################## Exponential Series's Summation ################################
// /** Exponential Series with loops
//  *  e^x = 1 + x + (x^2)/2! + (x^3)/3! +( x^4)/4! + (x^5)/5! +... + (x^n)/n!
//  * @param x number
//  * @param n number
//  */
// export function exponentialSeries(x: number, n: number): number {
//   let result: number = 1;
//   let e: number = 1;
//   for (let i: number = 1; i <= n; i++) {
//     e *= x / i; // the numerator  x will  (constant) and  the  denominator  i  will be  incremented and multiplied
//     result += e;
//   }
//   return result;
// }
export const exponentialSeries = (x: number, n: number): number => {
  return (
    1 +
    x +
    Array.from(Array(n - 1).keys())
      .map(n => n + 2)
      .map(n => expo(x, n) / memoizedFactorial(n))
      .reduce((a, c) => a + c)
  );
};

const expo = (x, n): number => Math.pow(x, n);
