import arrayAnalysisFunction from "./array-analysis-function";

describe("array analysis function", () => {
  test("if analysis works", () => {
    expect(arrayAnalysisFunction([1, 2, 3]))
      .toEqual({
        average: 2,
        min: 1,
        max: 3,
        length: 3,
      });
  });

  test("if analysis works with negative numbers", () => {
    expect(arrayAnalysisFunction([-100, -200, 310, 5]))
      .toEqual({
        average: 3.75,
        min: -200,
        max: 310,
        length: 4,
      });
  });

  test("if analysis works with decimals", () => {
    expect(arrayAnalysisFunction([10.5487, 2.18, 3.8763, 5]))
      .toEqual({
        average: 5.40125,
        min: 2.18,
        max: 10.5487,
        length: 4,
      });
  });

  test("if throws error when array includes not Number values", () => {
    expect(() => {
      arrayAnalysisFunction(["Lalala", 1, true]);
    })
      .toThrow();
  });

  test("if throws error when array is empty", () => {
    expect(() => {
      arrayAnalysisFunction([]);
    })
      .toThrow();
  });
});
