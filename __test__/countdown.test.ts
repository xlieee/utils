import { countdown } from "../src/index";

jest.useFakeTimers();
test("format thousand", () => {
  const fn = jest.fn();
  countdown(fn, { initialCount: 5, initialText: "init" }, false);
  jest.runAllTimers();
  expect(fn).toBeCalledTimes(5);
});
