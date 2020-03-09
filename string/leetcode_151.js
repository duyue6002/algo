/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
  let start = 0,
    end = s.length - 1;
  //   trim start
  while (s[start] === " ") {
    start++;
  }
  //   trim end
  while (s[end] === " ") {
    end--;
  }
  //   split
  let arr = [];
  let word = "";
  for (let i = start; i <= end; i++) {
    if (s[i] !== " ") {
      word += s[i];
    } else if (word !== "") {
      arr.unshift(word);
      word = "";
    }
  }
  arr.unshift(word)
  return arr.join(" ");
};

reverseWords("a good   example");