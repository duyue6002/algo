/**
 * @param {number} N
 * @return {number}
 */
var bitwiseComplement = function (N) {
  let x = 1;
  while (N > x) {
    x = x * 2 + 1;
  }
  return x - N;
};
