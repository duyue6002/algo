/**
 * @param {number} n
 * @return {string[][]}
 */
var solveNQueens = function(n) {
  if (n < 1) return [];
  let result = [];
  DFS(result, 0, n, [], [], [], []);
  return result;
};

var DFS = function(result, row, n, cols, left, right, cur) {
  if (row >= n) {
    result.push(cur.slice());
    return;
  }

  for (let col = 0; col < n; col++) {
    if (
      !cols.includes(col) &&
      !left.includes(row + col) &&
      !right.includes(row - col)
    ) {
      cols.push(col);
      left.push(row + col);
      right.push(row - col);

      let str = "";
      for (let i = 0; i < n; i++) {
        if (i === col) {
          str += 'Q';
        } else {
          str += '.';
        }
      }
      cur.push(str);

      DFS(result, row + 1, n, cols, left, right, cur);

      cols.splice(cols.indexOf(col), 1);
      left.splice(left.indexOf(row + col), 1);
      right.splice(right.indexOf(row - col), 1);
      cur.pop();
    }
  }
};

solveNQueens(4);