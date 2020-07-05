const arrayAnalysisFunction = (arr) => {
  if (arr.length === 0) {
    throw new Error("Empty Array");
  }

  arr.forEach((item) => {
    if (typeof item !== "number") {
      throw new Error("Array's value is/are not number(s).");
    }
  });

  const getAverage = () => arr.reduce((prev, curr) => prev + curr) / arr.length;
  const getMin = () => arr.sort((a, b) => a - b)[0];
  const getMax = () => arr.sort((a, b) => b - a)[0];
  return {
    average: getAverage(),
    min: getMin(),
    max: getMax(),
    length: arr.length,
  };
};

// if array is empty
// if array has strings🎉🎉

export default arrayAnalysisFunction;
