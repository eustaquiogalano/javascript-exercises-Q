const {
  capitalizeString,
  reverseString,
  calculator,
  ceaserCypher,
} = require("./TOP-assignment");

describe("TOP assginment", () => {
  it("capitalize", () => {
    expect(capitalizeString("one")).toBe("One");
  });

  it("Reverse String", () => {
    expect(reverseString("one")).toBe("eno");
  });

  it("Calculator", () => {
    expect(calculator.add(1, 1)).toBe(2);
    expect(calculator.subtract(1, 1)).toBe(0);
    expect(calculator.multiply(1, 1)).toBe(1);
    expect(calculator.divide(1, 1)).toBe(1);
  });
});

describe("Ceasar Cipher", () => {
  it("just make a shift", () => {
    expect(ceaserCypher("xyz", 3)).toEqual("abc");
  });
});
