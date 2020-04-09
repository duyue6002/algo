/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var addStrings = function (num1, num2) {
  let p = num1.length - 1,
    q = num2.length - 1;
  let carry = 0, res = "";
  while (p >= 0 || q >= 0) {
    let n1 = p >= 0 ? parseInt(num1[p--]) : 0;
    let n2 = q >= 0 ? parseInt(num2[q--]) : 0;
    let tmp = n1 + n2 + carry;
    carry = Math.floor(tmp / 10);
    res = String(tmp % 10) + res;
  }
  return carry === 1 ? "1" + res : res;
};

