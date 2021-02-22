export const fib = (n: number): number =>
  n <= 1 ? n : fib(n - 2) + fib(n - 1);
