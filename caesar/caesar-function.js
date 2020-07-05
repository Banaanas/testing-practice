const caesarFunction = (string, key) => {
  const shiftKey = key % 26;
  const stringArr = Array.from(string);
  const charCodeArr = [];
  stringArr.forEach((item, index) => {
    let charCode = string.charCodeAt(index);
    if (charCode >= 65 && charCode <= 90) { // Convert lowercase letters
      charCode += shiftKey; // add shift to charCode
      if (charCode > 90) {
        const newShift = charCode - 90;
        charCode = 64 + newShift;
      }
    } else if (charCode >= 97 && charCode <= 122) { // Convert uppercase letters
      charCode += shiftKey;
      if (charCode > 122) {
        const newShift = charCode - 122;
        charCode = 96 + newShift;
      }
    }
    charCodeArr.push(String.fromCharCode(charCode));
  });
  const convertedString = charCodeArr.join("");
  return convertedString;
};

export default caesarFunction;
