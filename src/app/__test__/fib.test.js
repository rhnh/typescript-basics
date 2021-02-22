import { fib as memoizedFib } from "../fib";
describe("Fib", () => {
  test("valid", () => {
    const res = memoizedFib(7);
    expect(res).toBe(13);
  });
  test("invalid", () => {
    const res = memoizedFib(7);
    expect(res).not.toBe(27);
  });
});
