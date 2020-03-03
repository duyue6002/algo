/**
 * @param {string} str
 * @return {number}
 */
var myAtoi = function(str) {
  if (str.length === 0) return 0;
  let index = 0,
    sign = 1,
    number = 0;
  let MAX = Math.pow(2, 31) - 1,
    MIN = -Math.pow(2, 31);
  while (str[index] === " " && index < str.length) {
    index++;
  }
  if (str[index] === "-" || str[index] === "+") {
    sign = str[index] === "-" ? -1 : 1;
    index++;
  }
  while (index < str.length) {
    let digit = str[index] - "0";
    if (digit >= 0 && digit <= 9 && str[index] !== " ") {
      number = 10 * number + digit;
      index++;
    } else {
      break;
    }
  }
  let res = number * sign;
  if (res < MIN) return MIN;
  if (res > MAX) return MAX;
  return res;
};
