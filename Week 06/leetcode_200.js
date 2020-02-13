/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
  if (grid.length === 0 || (!!grid[0] && grid[0].length === 0)) return 0;
  let row = grid.length,
    col = grid[0].length;

  let dx = [-1, 1, 0, 0];
  let dy = [0, 0, 1, -1];

  let uf = new unionFind(grid);

  for (let i = 0; i < row; i++) {
    for (let j = 0; j < col; j++) {
      if (grid[i][j] === "1") {
        for (let k = 0; k < 4; k++) {
          let x = i + dx[k],
            y = j + dy[k];
          if (x >= 0 && x < row && y >= 0 && y < col && grid[x][y] === '1') {
            uf.union(i * col + j, x * col + y);
          }
        }
      }
    }
  }

  return uf.count;
};

var unionFind = function(grid) {
  let row = grid.length,
    col = grid[0].length;
  this.parent = Array(row * col).fill(0);
  this.count = 0;

  for (let i = 0; i < row; i++) {
    for (let j = 0; j < col; j++) {
      if (grid[i][j] === "1") {
        this.parent[i * col + j] = i * col + j;
        this.count++;
      }
    }
  }

  this.find = function(p) {
    while (p !== this.parent[p]) {
      this.parent[p] = this.parent[this.parent[p]];
      p = this.parent[p];
    }
    return p;
  };

  this.union = function(p, q) {
    let P = this.find(p),
      Q = this.find(q);
    if (P === Q) return;
    this.parent[P] = Q;
    this.count--;
  };
};

numIslands([
  ["1", "1", "0", "0", "0"],
  ["1", "1", "0", "0", "0"],
  ["0", "0", "1", "0", "0"],
  ["0", "0", "0", "1", "1"]
]);
