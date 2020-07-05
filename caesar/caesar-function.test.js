import caesarFunction from "./caesar-function";

describe("caesar function", () => {
  test("if shift works", () => {
    expect(caesarFunction("hola", 5))
      .toBe("mtqf");
  });

  test("if works for phrases", () => {
    expect(caesarFunction("hola bonito", 10))
      .toBe("ryvk lyxsdy");
  });

  test("if all alphabet is wrapped", () => {
    expect(caesarFunction("I love bananas and oranges", 26))
      .toBe("I love bananas and oranges");
  });

  test("if keeps the same case", () => {
    expect(caesarFunction("I Eat Burgers Everyday", 18))
      .toBe("A Wsl Tmjywjk Wnwjqvsq");
  });

  test("if not alphabetical characters are not encrypted", () => {
    expect(caesarFunction("I Eat 10 Burgers Everyday !!", 18))
      .toBe("A Wsl 10 Tmjywjk Wnwjqvsq !!");
  });

  test("if it works when shift is higher than 26", () => {
    expect(caesarFunction("I Eat 10 Burgers Everyday !!", 50))
      .toBe("G Cyr 10 Zspecpq Ctcpwbyw !!");
  });
});
