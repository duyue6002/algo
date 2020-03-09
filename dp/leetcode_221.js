/**
 * @param {character[][]} matrix
 * @return {number}
 */
var maximalSquare = function(matrix) {
  if (matrix.length === 0) return 0;
  let row = matrix.length,
    col = matrix[0].length;
  let dp = Array.from(Array(row), () => Array(col).fill(0));
  let sz = 0;
  for (let i = 0; i < row; i++) {
    for (let j = 0; j < col; j++) {
      if (matrix[i][j] !== "0") {
        if (i && j) {
          dp[i][j] = Math.min(dp[i - 1][j], dp[i][j - 1], dp[i - 1][j - 1]) + 1;
        } else {
          dp[i][j] = matrix[i][j] - "0";
        }
      }
      sz = Math.max(dp[i][j], sz);
    }
  }
  return sz * sz;
};
