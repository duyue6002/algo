/**
 * @param {number[][]} triangle
 * @return {number}
 */
var minimumTotal = function(triangle) {
  let dp = JSON.parse(JSON.stringify(triangle));
  for (let i = triangle.length - 2; i >= 0; i--) {
    for (let j = 0; j < triangle[i].length; j++) {
      dp[i][j] += Math.min(dp[i + 1][j], dp[i + 1][j + 1]);
    }
  }
  return dp[0][0];
};

/**
 * @param {number[][]} triangle
 * @return {number}
 */
var minimumTotal = function(triangle) {
  return helper(0, 0, triangle);
};

var helper = function(level, index, triangle) {
  // terminator
  if (level === triangle.length - 1) {
    return triangle[level][index];
  }
  // current level
  // next level
  let left = helper(level + 1, index, triangle);
  let right = helper(level + 1, index + 1, triangle);
  return Math.min(left, right) + triangle[level][index];
  // clear
};

minimumTotal([[-1], [2, 3], [1, -1, -3]]);
