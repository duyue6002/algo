/**
 *
 * @param {number[][]} M
 * @param {number[]} visited
 * @param {number} i
 */
var dfs = function(M, visited, i) {
  for (let j = 0; j < M.length; j++) {
    if (M[i][j] === 1 && visited[j] === 0) {
      visited[j] = 1;
      dfs(M, visited, j);
    }
  }
};

/**
 * @param {number[][]} M
 * @return {number}
 */
var findCircleNum = function(M) {
  let visited = Array(M.length).fill(0);
  let count = 0;
  for (let i = 0; i < M.length; i++) {
    if (visited[i] === 0) {
      dfs(M, visited, i);
      count++;
    }
  }
  return count;
};

findCircleNum([
  [1, 1, 0],
  [1, 1, 0],
  [0, 0, 1]
]);
