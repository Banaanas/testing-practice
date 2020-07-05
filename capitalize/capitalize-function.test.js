import capitalize from "./capitalize-function";

describe("capitalize function", () => {
  it("should capitalize a simple word", () => {
    expect(capitalize("hola"))
      .toBe("Hola");
  });

  it("should capitalize a word with only first letter in lowercase", () => {
    expect(capitalize("bANANA"))
      .toBe("BANANA");
  });

  it("should capitalize do nothing with first letter already capitalized", () => {
    expect(capitalize("Orange"))
      .toBe("Orange");
  });

  it("should keep space between words in a phrase", () => {
    expect(capitalize("i enjoy fruits"))
      .toBe("I enjoy fruits");
  });

  it("should do nothing if first element in the string is not a letter", () => {
    expect(capitalize("1979 - Smashing Pumpkins"))
      .toBe("1979 - Smashing Pumpkins");
  });
});
