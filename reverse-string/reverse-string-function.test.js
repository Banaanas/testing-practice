import reverseStringFunction from "./reverse-string-function";

describe("reverse string function", () => {
  it("should reverse a simple word", () => {
    expect(reverseStringFunction("hola"))
      .toBe("aloh");
  });

  it("should reverse a simple phrase including spaces", () => {
    expect(reverseStringFunction("i love fruits"))
      .toBe("stiurf evol i");
  });

  it("should include and reverse punctuation", () => {
    expect(reverseStringFunction("i love fruits so much !!!"))
      .toBe("!!! hcum os stiurf evol i");
  });

  it("should be case sensitive", () => {
    expect(reverseStringFunction("I Enjoy All the fruits"))
      .toBe("stiurf eht llA yojnE I");
  });
});
