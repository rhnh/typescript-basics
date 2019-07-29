export const harmonicSeries = (value: number): number => {
  return Array.from(Array(value).keys()).reduce((a, c) => a + 1 / (c + 1)) + 1;
};
