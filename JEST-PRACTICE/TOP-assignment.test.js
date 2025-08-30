const {
  capitalizeString,
  reverseString,
  calculator,
  ceaserCypher,
  analyzeArray,
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

  it("case preservation", () => {
    expect(ceaserCypher("oNeNeEe", 3)).toBe("rQhQhHh");
  });

  it("test punctuation", () => {
    expect(ceaserCypher("one one", 3)).toBe("rqh rqh");

    expect(ceaserCypher("one!one", 3)).toBe("rqh!rqh");
    expect(ceaserCypher("one!one...", 3)).toBe("rqh!rqh...");
    expect(ceaserCypher("Lets! GOOOO! @VMC", 3)).toBe("Ohwv! JRRRR! @YPF");
  });
});

describe("Array analyzer", () => {
  let obj;

  beforeEach(() => {
    obj = analyzeArray([3, 9, 5, 7, 1]);
  });

  it("get the average", () => {
    expect(obj.average).toEqual(5);
  });

  it("get the minimum", () => {
    expect(obj.min).toEqual(1);
  });

  it("get the maximum", () => {
    expect(obj.max).toEqual(9);
  });

  it("get the length", () => {
    expect(obj.length).toEqual(5);
  });
});
