/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
  let arr = [];
  let counter = [];
  for (let i = 0; i < s.length; i++) {
    let index = arr.indexOf(s[i]);
    if (index === -1) {
      arr.push(s[i]);
    } else {
      counter.push(index);
    }
  }
  for (let i = 0; i < arr.length; i++) {
    if (!counter.includes(i)) return i;
  }
  return -1;
};

/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
  let map = {};
  let first = s.length;
  for (let i = 0; i < s.length; i++) {
    let ch = s[i];
    if (map[ch]) {
      map[ch]["counter"]++;
    } else {
      map[ch] = { index: i, counter: 1 };
    }
  }
  for (let ch of Object.keys(map)) {
    if (map[ch]["counter"] === 1 && map[ch]["index"] < first) {
      first = map[ch]["index"];
    }
  }
  return first === s.length ? -1 : first;
};

/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
  let res = Array(s.length).fill(0);
  for (let i = 0; i < s.length; i++) {
    let index = s.indexOf(s[i]);
    if (i === index) {
      res[i] = 1;
    } else {
      res[index] = 0;
    }
  }
  return res.indexOf(1);
};

firstUniqChar("leetcode");
