const memoized = fn => {
  const table = {};
  return arg => table[arg] || fn(arg);
};
export const fib = (n: number): number =>
  n <= 1 ? n : fib(n - 2) + fib(n - 1);

export const memoizedFib = memoized(fib);
