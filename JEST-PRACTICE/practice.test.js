import { sum } from "./practice";

// const { sum } = require("./practice");

test("add 2 giiven numbers", () => {
  expect(sum(1, 1)).toBe(2);
});

test("add 2 given numbers", () => {
  let thousand = sum(1000, 1);
  expect(thousand).toBe(1001);
});

test("sum of 2 number is a thousand", () => {
  let isThousand = sum(1000, 1) > 1000;
  expect(isThousand).toBe(true);
});

test("null or falsy", () => {
  let thousand;
  let thisIsNull = null;
  expect(thisIsNull).toBeNull();
  expect(thousand).toBeUndefined();
});

test("using matchers greater than 1000", () => {
  let number = sum(1000, 1);
  expect(number).toBeGreaterThan(1000);
});

test("using matchers on floating point numbers", () => {
  let number = sum(1, 0.3);
  expect(number).toBeCloseTo(1.3);
});

test("using matchers for strings", () => {
  let messiah = "Jesus";
  expect(messiah).toMatch("sus");
  expect(messiah).not.toMatch("evil");
});

test("look for something in an array", () => {
  expect(["one", "two", "three"]).toContain("two");
});
