/**
 * @param {number} num
 * @return {number[]}
 */
var countBits = function(num) {
  let res = Array(num + 1).fill(0);
  let i = 0,
    b = 1;
  while (b <= num) {
    while (i < b && i + b <= num) {
      res[i + b] = res[i] + 1;
      i++;
    }
    i = 0;
    b <<= 1;
  }
  return res;
};

/**
 * @param {number} num
 * @return {number[]}
 */
var countBits = function(num) {
  let res = Array(num + 1).fill(0);
  for (let i = 1; i <= num; i++) {
    let t = Math.floor(i / 2);
    res[i] = res[t] + (i % 2);
  }
  return res;
};

countBits(7);
