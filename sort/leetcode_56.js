/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function(intervals) {
  if (intervals.length === 0) return [];
  intervals.sort((a, b) => a[0] - b[0]);
  let res = [];
  let left = intervals[0][0],
    right = intervals[0][1];
  for (let i = 1; i < intervals.length; i++) {
    if (intervals[i][0] > right) {
      res.push([left, right]);
      left = intervals[i][0];
    }
    if (intervals[i][1] > right) {
      right = intervals[i][1];
    }
  }
  res.push([left, right]);
  return res;
};
