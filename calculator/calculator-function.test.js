import calculatorFunction from "./calculator-function";

describe("calculator function", () => {
  test("if addition works", () => {
    expect(calculatorFunction.add(2, 3))
      .toBe(5);
  });

  test("if addition between two floating numbers works", () => {
    expect(calculatorFunction.add(152.37, 4443.7935))
      .toBe(4596.164);
  });

  test("if subtraction works", () => {
    expect(calculatorFunction.subtract(250, 1500))
      .toBe(-1250);
  });

  test("if subtraction between two floating numbers works", () => {
    expect(calculatorFunction.subtract(1598.5787, 12.687))
      .toBe(1585.892);
  });

  test("if subtract a negative number equals to add it", () => {
    expect(calculatorFunction.subtract(1284, -123))
      .toBe(1407);
  });

  test("if multiplication works", () => {
    expect(calculatorFunction.multiply(458, 36))
      .toBe(16488);
  });

  test("if multiplication between two floating numbers works", () => {
    expect(calculatorFunction.multiply(2548.681, 45.977))
      .toBe(117180.706);
  });

  test("if division works", () => {
    expect(calculatorFunction.divide(81, 9))
      .toBe(9);
  });

  test("if division between two floating numbers works", () => {
    expect(calculatorFunction.divide(10.45, 25.5))
      .toBe(0.41);
  });

  test("if divide by zero gives Infinity", () => {
    expect(calculatorFunction.divide(150, 0))
      .toBe(Infinity);
  });

  test("if infinite result is rounded", () => {
    expect(calculatorFunction.divide(10, 3))
      .toBe(3.333);
  });
});
