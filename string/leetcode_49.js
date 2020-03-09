/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
  let map = {},
    res = [];
  for (let str of strs) {
    let sorted = str
      .split("")
      .sort()
      .join("");
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
