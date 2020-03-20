/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function(board, word) {
  if (!board || board.length === 0 || (board && board[0].length === 0))
    return false;
  let m = board.length,
    n = board[0].length;
  let table = Array.from(Array(m), () => Array(n).fill(0));

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (word.indexOf(board[i][j]) === 0) {
        if (DFS(board, word, "", i, j, table)) {
          return true;
        }
      }
    }
  }
  return false;
};

var DFS = function(board, word, current, row, col, table) {
  current += board[row][col];
  table[row][col] = 1;

  if (current.length === word.length) {
    return current === word;
  }

  let ox = row,
    oy = col;
  let direction = [
    [-1, 0],
    [1, 0],
    [0, -1],
    [0, 1]
  ];

  for (let [dx, dy] of direction) {
    ox += dx;
    oy += dy;
    if (
      ox >= 0 &&
      ox < board.length &&
      oy >= 0 &&
      oy < board[0].length &&
      table[ox][oy] !== 1 &&
      word.indexOf(current.concat(board[ox][oy])) === 0 &&
      DFS(board, word, current, ox, oy, table)
    )
      return true;
    ox -= dx;
    oy -= dy;
  }

  table[row][col] = 0;
  return false;
};
