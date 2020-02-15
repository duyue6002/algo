/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function(board) {
  if (board.length !== 9 || (board[0] && board[0].length !== 9)) return false;
  let blocks = Array.from(Array(9), () => Array());
  for (let i = 0; i < 9; i++) {
    let row = [],
      col = [];
    for (let j = 0; j < 9; j++) {
      //       行 & 块
      if (board[i][j] !== ".") {
        let index = Math.floor(i / 3) * 3 + Math.floor(j / 3);
        if (row.includes(board[i][j]) || blocks[index].includes(board[i][j]))
          return false;
        row.push(board[i][j]);
        blocks[index].push(board[i][j]);
      }
      //       列
      if (board[j][i] !== ".") {
        if (col.includes(board[j][i])) return false;
        col.push(board[j][i]);
      }
    }
  }

  return true;
};
