/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {
  let map = {},
    res = [];
  for (let str of strs) {
    let sorted = str.split("").sort().join("");
    if (map.hasOwnProperty(sorted)) {
      map[sorted].push(str);
    } else {
      map[sorted] = [str];
    }
  }
  for (let key in map) {
    res.push(map[key]);
  }
  return res;
};

/**
 * 用MAP数据结构加速
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {
  let map = new Map();
  for (let str of strs) {
    let sorted = str.split("").sort().join("");
    if (map.has(sorted)) {
      map.get(sorted).push(str);
    } else {
      map.set(sorted, [str]);
    }
  }
  return [...map.values()];
};
