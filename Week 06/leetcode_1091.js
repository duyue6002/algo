/**
 * 超时啊！！！！FUCK
 * @param {number[][]} grid
 * @return {number}
 */
var shortestPathBinaryMatrix = function(grid) {
  if ((grid && grid.length === 0) || (grid[0] && grid[0].length === 0))
    return -1;
  let n = grid.length;
  let dx = [-1, -1, -1, 0, 0, 1, 1, 1];
  let dy = [-1, 0, 1, -1, 1, -1, 0, 1];
  let pq = [[0, 0, 0, 0]];
  let visited = [];
  while (pq.length !== 0) {
    let [distance, i, j, he] = pq.shift();
    visited.push([i, j]);
    let step = distance - he;
    if (i >= 0 && i < n && j >= 0 && j < n && grid[i][j] === 0) {
      if (i === n - 1 && j === n - 1) {
        return step + 1;
      }
      for (let k = 0; k < 8; k++) {
        let x = i + dx[k],
          y = j + dy[k];
        if (
          x >= 0 &&
          x < n &&
          y >= 0 &&
          y < n &&
          grid[x][y] === 0 &&
          !visited.some(v => v[0] === x && v[1] === y)
        ) {
          pq.push([
            distance + 1 + heuristic(x, y, n - 1),
            x,
            y,
            he + heuristic(x, y, n - 1)
          ]);
        }
      }
    } else {
      return -1;
    }
    pq.sort((a, b) => a[0] - b[0]);
  }
  return -1;
};

var heuristic = function(x, y, n) {
  return Math.max(Math.abs(n - x), Math.abs(n - y));
};

shortestPathBinaryMatrix([
  [0, 0, 1, 1],
  [0, 0, 1, 1],
  [0, 0, 0, 1],
  [0, 0, 0, 0]
]);
