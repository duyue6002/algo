/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var solveSudoku = function(board) {
  if ((board && board.length !== 9) || (board[0] && board[0].length !== 9))
    return;
  DFS(board);
};

var DFS = function(board) {
  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
      if (board[i][j] === ".") {
        for (let num = 1; num <= 9; num++) {
          let c = "" + num;
          if (isValidSudoku(board, i, j, c)) {
            board[i][j] = c;
            if (DFS(board)) return true;
            board[i][j] = ".";
          }
        }
        return false;
      }
    }
  }
  return true;
};

var isValidSudoku = function(board, row, col, c) {
  for (let i = 0; i < 9; i++) {
    if (board[row][i] !== "." && board[row][i] === c) return false;
    if (board[i][col] !== "." && board[i][col] === c) return false;
    let row_index = Math.floor(row / 3) * 3 + Math.floor(i / 3);
    let col_index = Math.floor(col / 3) * 3 + (i % 3);
    if (
      board[row_index][col_index] !== "." &&
      board[row_index][col_index] === c
    )
      return false;
  }
  return true;
};

// 方法二，用N皇后问题的解题思路，用数组存储可填的数

/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var solveSudoku = function(board) {
  if ((board && board.length !== 9) || (board[0] && board[0].length !== 9))
    return;
  let rows = generateArray();
  let cols = generateArray();
  let blocks = generateArray();

  // 去除已用数字
  let empty = [];
  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
      if (board[i][j] !== ".") {
        let ch = board[i][j];
        let index = Math.floor(i / 3) * 3 + Math.floor(j / 3);
        rows[i].splice(rows[i].indexOf(ch), 1);
        cols[j].splice(cols[j].indexOf(ch), 1);
        blocks[index].splice(blocks[index].indexOf(ch), 1);
      } else {
        empty.push([i, j]);
      }
    }
  }

  backtrack(0, empty, board, rows, cols, blocks);
};

var generateArray = function() {
  return Array.from(Array(9), () => [...Array(9).keys()].map(x => (x + 1).toString()));
};

var backtrack = function(iter, empty, board, rows, cols, blocks) {
  if (iter === empty.length) return true;

  let [i, j] = empty[iter];
  let index = Math.floor(i / 3) * 3 + Math.floor(j / 3);

  for (let num = 1; num <= 9; num++) {
    let ch = '' + num;
    if (
      rows[i].includes(ch) &&
      cols[j].includes(ch) &&
      blocks[index].includes(ch)
    ) {
      rows[i].splice(rows[i].indexOf(ch), 1);
      cols[j].splice(cols[j].indexOf(ch), 1);
      blocks[index].splice(blocks[index].indexOf(ch), 1);

      board[i][j] = ch;
      if (backtrack(iter + 1, empty, board, rows, cols, blocks)) return true;

      rows[i].push(ch);
      cols[j].push(ch);
      blocks[index].push(ch);
    }
  }
  return false;
};

solveSudoku([
  ["5", "3", ".", ".", "7", ".", ".", ".", "."],
  ["6", ".", ".", "1", "9", "5", ".", ".", "."],
  [".", "9", "8", ".", ".", ".", ".", "6", "."],
  ["8", ".", ".", ".", "6", ".", ".", ".", "3"],
  ["4", ".", ".", "8", ".", "3", ".", ".", "1"],
  ["7", ".", ".", ".", "2", ".", ".", ".", "6"],
  [".", "6", ".", ".", ".", ".", "2", "8", "."],
  [".", ".", ".", "4", "1", "9", ".", ".", "5"],
  [".", ".", ".", ".", "8", ".", ".", "7", "9"]
]);
