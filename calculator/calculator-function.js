const calculatorFunction = {
  // Round all result to 3 decimals
  add(a, b) {
    return Math.round((a + b) * 1000) / 1000;
  },
  subtract(a, b) {
    return Math.round((a - b) * 1000) / 1000;
  },
  multiply(a, b) {
    return Math.round((a * b) * 1000) / 1000;
  },
  divide(a, b) {
    return Math.round((a / b) * 1000) / 1000;
  },
};

export default calculatorFunction;
