/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
  let start = 0,
    end = s.length - 1;
  while (s[start] === " ") {
    start++;
  }
  while (s[end] === " ") {
    end--;
  }
  let arr = [],
    word = "";
  for (let i = start; i <= end; i++) {
    if (s[i] !== " ") {
      word = s[i].concat(word);
    } else if (word !== "") {
      arr.push(word);
      word = "";
    }
  }
  arr.push(word);
  return arr.join(" ");
};
