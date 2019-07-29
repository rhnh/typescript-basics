import { isEven } from "./utils";
//########################################## Odd Numbers' Summation ################################
/** Sum of Odds Numbers
 * 1+3+5....
 */
// export function sumOfOddNumbers(value: number): number {
//   let sum: number = 0;
//   for (let i: number = 0; i <= value; i++) {
//     if (oddNumber(i)) {
//       sum += i;
//     }
//   }
//   return sum;
// }
export const sumOfOddNumbers = (value: number): number => {
  let res = Array.from(Array(+value).keys()).map(x => x + 1);
  return res.reduce((a, c) => {
    let res = !isEven(c) ? c : 0;
    return a + res;
  });
};
