const reverseStringFunction = (string) => {
  const stringArr = Array.from(string);
  const reversedStringArr = [];
  stringArr.forEach((item) => {
    reversedStringArr.unshift(item);
  });
  const reversedString = reversedStringArr.join("");
  return reversedString;
};

export default reverseStringFunction;
