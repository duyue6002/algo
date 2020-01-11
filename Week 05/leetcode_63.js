/**
 * @param {number[][]} obstacleGrid
 * @return {number}
 */
var uniquePathsWithObstacles = function(obstacleGrid) {
  let m = obstacleGrid.length;
  let n = obstacleGrid[0].length;
  let arr = Array.from(Array(m), () => Array(n).fill(1));
  if (m > 1 || n > 1) {
    for (let i = m - 1; i >= 0; i--) {
      for (let j = n - 1; j >= 0; j--) {
        if (obstacleGrid[i][j] === 1) {
          arr[i][j] = 0;
        } else {
          if (i < m - 1 && j < n - 1) {
            arr[i][j] = arr[i + 1][j] + arr[i][j + 1];
          } else if (i === m - 1 && j === n - 1) {
            arr[i][j] = 1;
          } else if (i === m - 1) {
            arr[i][j] = arr[i][j + 1];
          } else if (j === n - 1) {
            arr[i][j] = arr[i + 1][j];
          }
        }
      }
    }
  } else {
    return obstacleGrid[m - 1][n - 1] ? 0 : 1;
  }
  return arr[0][0];
};

/**
 * @param {number[][]} obstacleGrid
 * @return {number}
 */
var uniquePathsWithObstacles = function(obstacleGrid) {
  let m = obstacleGrid.length;
  let n = obstacleGrid[0].length;
  let arr = Array(n).fill(1);
  for (let i = 1; i < m; i++) {
    for (let j = 1; j < n; j++) {
      if (obstacleGrid[i][j] && obstacleGrid[i][j] === 1) {
        arr[j] = 0;
      } else {
        arr[j] += arr[j - 1];
      }
    }
  }
  if (m > 1 || n > 1) {
  } else {
    return obstacleGrid[m - 1][n - 1] ? 0 : 1;
  }
  return arr[n - 1];
};

uniquePathsWithObstacles([[0, 1]]);
