import { format } from "../src/index";

test("format thousand", () => {
  expect(format.thousand(1234)).toBe("1,234");
  expect(format.thousand(-1234)).toBe("-1,234");
  expect(format.thousand(123)).toBe("123");
});

test("format toPercent", () => {
  expect(format.toPercent(0.04)).toBe("4%");
  expect(format.toPercent(0.24)).toBe("24%");
  expect(format.toPercent(0.243)).toBe("24.3%");
  expect(format.toPercent(-0.24)).toBe("-24%");
  expect(format.toPercent(1.24)).toBe("124%");
  expect(format.toPercent(-1.24)).toBe("-124%");
});
