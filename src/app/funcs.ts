//########################################## Leibniz Series's summation ###################################
/** Leibniz series' summation with loops
 * π/4 = 1/1 - 1/3 + 1/5 - 1 /7 + 1/9 ± ...
 */

// export function LeibnizSeries(value: number): number {
//   let sum: number = 0;
//   for (let i: number = 1; i < 2 * value; i++) {
//     if (oddNumber(i)) {
//       sum *= -1;
//       sum += 1 / i;
//     }
//   }

//   if (sum < 0) {
//     sum *= -1;
//   }

//   return (sum *= 4);
// }

export const LeibnizSeries = (value: number): number => {
  return (
    Array.from(Array(value * 2).keys())
      .filter(x => !isEven(x))
      .reduce((a: number, c: number, i: number) => {
        let v = isEven(i) ? 1 : -1;
        return a + v / c;
      }) * 4
  );
};

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

const expo = (x, n): number => Math.pow(x, n);

const memoized = fn => {
  const table = {};
  return arg => table[arg] || fn(arg);
};

const factorial = (num: number): number =>
  num < 2 ? 1 : num * factorial(num - 1);

export const memoizedFactorial = memoized(factorial);

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
  let res = Array.from(Array(value).keys()).map(x => x + 1);
  return res.reduce((a, c) => {
    let res = !isEven(c) ? c : 0;
    return a + res;
  });
};

//########################################## Harmonic Series' Summation ################################

/**
 * 1 + 1/2+ 1/3 + 1/4 ...
 */
// export function harmonicSeries(value: number): number {
//   let sum: number = 0;
//   for (let i: number = 1; i <= value; i++) {
//     sum += 1 / i;
//   }
//   return sum;
// }

export const harmonicSeries = (value: number): number => {
  return Array.from(Array(value).keys()).reduce((a, c) => a + 1 / (c + 1)) + 1;
};
//########################################## John Wallis Series' Summation ################################
//PI = 2*{(2/1)*(2/3)*(4/3)*(4/5)*(6/5)*(6/7)*}
//Test; loop
// export function JWallisPI(k: number): number {
//   let pi: number = 1;
//   let i = 1,
//     z = 1, //Zaehler
//     n = 2; //Nenner
//   while (i <= k) {
//     pi *= n / z;
//     if (i % 2 === 0) {
//       n += 2;
//     } else {
//       z += 2;
//     }
//     i++;
//   }
//   return pi * 2;
// }

export const JWallisPI = (value: number): number => {
  let z = 1,
    n = 2;
  let p = 1;
  Array.from(Array(value).keys())
    .map(x => x + 1)
    .map(x => {
      p *= n / z;
      if (x % 2 === 0) {
        n += 2;
      } else {
        z += 2;
      }
    });
  return p * 2;
};

/**
 *
 * @param value number
 */
export function primeFactors(value: number): string {
  if (!Number(value)) return "0";
  if (isPrime(value)) {
    return `${value} is a prime number`;
  }
  let original: number = value;
  let strResult: string = "";
  while (value % 2 === 0) {
    strResult += " * " + 2;
    value /= 2;
  }
  //since value is odd or prime by now
  for (let i = 3; i * i <= value; i = i + 2) {
    while (value % i === 0) {
      strResult += " * " + i;
      value /= i;
    }
  }
  strResult = (value !== 1 ? value + "" : "") + strResult + " = " + original;
  if (
    strResult.charAt(0) === "" ||
    strResult.charAt(0) === " " ||
    strResult.charAt(0) === "*"
  )
    strResult = strResult.substr(2);

  return strResult;
}
//utils
function oddNumber(value: number): boolean {
  if (!isEven(value)) {
    return true;
  }
  return false;
}

export function numberOfHandShake(n: number): number {
  let sum: number = 0;
  for (let i = 0; i < n; i++) {
    sum += i;
  }
  return sum;
}

//
function isEven(value: number): boolean {
  if (value % 2 === 0) {
    return true;
  }
  return false;
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
