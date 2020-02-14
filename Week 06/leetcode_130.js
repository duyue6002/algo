/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var solve = function(board) {
  if (board.length === 0 || (board[0] && board[0].length === 0)) return;
  let row = board.length,
    col = board[0].length;
  let dx = [-1, 1, 0, 0],
    dy = [0, 0, -1, 1];
  let uf = new unionFind(board);
  for (let i = 0; i < row; i++) {
    for (let j = 0; j < col; j++) {
      if (board[i][j] === "O") {
        if (i === 0 || j === 0 || i === row - 1 || j === col - 1) {
          uf.union(i * col + j, row * col);
        } else {
          for (let k = 0; k < 4; k++) {
            let x = i + dx[k],
              y = j + dy[k];
            if (x >= 0 && x < row && y >= 0 && y < col && board[x][y] === "O") {
              uf.union(i * col + j, x * col + y);
            }
          }
        }
      }
    }
  }
  for (let i = 0; i < row; i++) {
    for (let j = 0; j < col; j++) {
      if (!uf.connected(i * col + j, row * col)) {
        board[i][j] = "X";
      }
    }
  }
};

var unionFind = function(board) {
  let row = board.length,
    col = board[0].length;
  this.parent = Array(row * col + 1).fill(0);

  for (let i = 0; i < row; i++) {
    for (let j = 0; j < col; j++) {
      if (board[i][j] === "O") {
        this.parent[i * col + j] = i * col + j;
      }
    }
  }

  this.find = function(n) {
    while (n !== this.parent[n]) {
      this.parent[n] = this.parent[this.parent[n]];
      n = this.parent[n];
    }
    return n;
  };

  this.union = function(p, q) {
    let P = this.find(p),
      Q = this.find(q);
    if (P === Q) return;
    this.parent[P] = Q;
  };

  this.connected = function(p, q) {
    return this.find(p) === this.find(q);
  };
};

solve([
  ["X", "X", "X", "X"],
  ["X", "O", "O", "X"],
  ["X", "X", "O", "X"],
  ["X", "O", "X", "X"],
  ["X", "O", "X", "X"]
]);