/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
  let count = 0;
  let index = s.length - 1;
  let flag = s[index] === " " ? true : false; // 最后一个char是空格
  for (; index >= 0; index--) {
    if (s[index] === " " && !flag) return count;
    if (s[index] !== " ") {
      count++;
      flag = false;
    }
  }
  return count;
};
