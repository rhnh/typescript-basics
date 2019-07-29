import * as funcs from "../funcs";

test("Leibniz Series", () => {
  expect(funcs.LeibnizSeries(3)).toBeCloseTo(3.466667, 5);
  expect(funcs.LeibnizSeries(100)).toBeCloseTo(3.1315929, 5);
  expect(funcs.LeibnizSeries(1000)).toBeCloseTo(3.1405927, 5);
  expect(funcs.LeibnizSeries(100000)).toBeCloseTo(3.1415827, 5);
});

test("Exponential Series", () => {
  expect(funcs.exponentialSeries(1, 3)).toBeCloseTo(2.666667, 5);
  expect(funcs.exponentialSeries(1, 20)).toBeCloseTo(2.7182818, 5);
  expect(funcs.exponentialSeries(3, 10)).toBeCloseTo(20.0796652, 5);
  expect(funcs.exponentialSeries(3, 20)).toBeCloseTo(20.0855369, 5);
});

test("Sum of numbers", () => {
  expect(funcs.sumOfOddNumbers(5)).toBe(9);
  expect(funcs.sumOfOddNumbers(100)).toBe(2500);
  expect(funcs.sumOfOddNumbers(3600)).toBe(3240000);
});

test("isPrime", () => {
  expect(funcs.isPrime(6)).toBeFalsy();
  expect(funcs.isPrime(16)).toBeFalsy();
  expect(funcs.isPrime(3)).toBeTruthy();
  expect(funcs.isPrime(2)).toBeTruthy();
  expect(funcs.isPrime(7)).toBeTruthy();
});

test("Harmonic Series", () => {
  expect(funcs.harmonicSeries(3)).toBeCloseTo(1.833333, 5);
  expect(funcs.harmonicSeries(10)).toBeCloseTo(2.9289683, 5);
  expect(funcs.harmonicSeries(1000)).toBeCloseTo(7.4854709, 5);
  expect(funcs.harmonicSeries(1000000)).toBeCloseTo(14.3927267, 5);
});

test("John Wallis PI calculating method", () => {
  expect(funcs.JWallisPI(100)).toBeCloseTo(3.126079, 5);
  expect(funcs.JWallisPI(100000)).toBeCloseTo(3.141577, 5);
});

test("Factorial", () => {
  expect(funcs.memoizedFactorial(0)).toBe(1);
  expect(funcs.memoizedFactorial(1)).toBe(1);
  expect(funcs.memoizedFactorial(5)).toBe(120);
  expect(funcs.memoizedFactorial(3)).toBe(6);
  expect(funcs.memoizedFactorial(7)).toBe(5040);
  expect(funcs.memoizedFactorial(12)).toBe(479001600);
});

test("Handshake", () => {
  expect(funcs.memoizedFactorial(0)).toBe(1);
  expect(funcs.numberOfHandShake(10)).toBe(45);
  expect(funcs.numberOfHandShake(100)).toBe(4950);
  expect(funcs.numberOfHandShake(500)).toBe(124750);
});
