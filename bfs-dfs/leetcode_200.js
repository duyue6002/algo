/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function (grid) {
  if (grid.length === 0 || (grid && grid[0].length === 0)) return 0;
  const m = grid.length,
    n = grid[0].length;
  let count = 0;
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (grid[i][j] === "1") {
        count++;
        dfs(i, j, grid, m, n);
      }
    }
  }
  return count;
};

var dfs = function (i, j, grid, m, n) {
  if (i >= m || j >= n || i < 0 || j < 0 || grid[i][j] === "0") return;
  grid[i][j] = "0";
  const map = [
    [0, -1],
    [0, 1],
    [1, 0],
    [-1, 0],
  ];
  for (const [x, y] of map) {
    dfs(i + x, j + y, grid, m, n);
  }
};
