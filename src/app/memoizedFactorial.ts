export const memoized = fn => {
  const table = {};
  return arg => table[arg] || fn(arg);
};

export const factorial = (num: number): number =>
  num < 2 ? 1 : +num * factorial(+num - 1);

export const memoizedFactorial = memoized(factorial);
