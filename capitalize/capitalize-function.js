const capitalize = (string) => {
  const stringArr = Array.from(string);
  stringArr[0] = stringArr[0].toUpperCase();
  const result = stringArr.join("");
  return result;
};

export default capitalize;
