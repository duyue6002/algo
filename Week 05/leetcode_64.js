/**
 * @param {number[][]} grid
 * @return {number}
 */
var minPathSum = function(grid) {
  let dp = JSON.parse(JSON.stringify(grid));
  let m = grid.length,
    n = grid[0].length;
  if (m === 0 || n === 0) return 0;
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (i - 1 >= 0 && j - 1 >= 0) {
        dp[i][j] = Math.min(dp[i - 1][j], dp[i][j - 1]) + grid[i][j];
      } else if (i - 1 >= 0) {
        dp[i][j] = dp[i - 1][j] + grid[i][j];
      } else if (j - 1 >= 0) {
        dp[i][j] = dp[i][j - 1] + grid[i][j];
      }
    }
  }
  return dp[m - 1][n - 1];
};

minPathSum([
  [1, 3, 1],
  [1, 5, 1],
  [4, 2, 1]
]);
