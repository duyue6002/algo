/**
 * @param {number} n
 * @return {number}
 */
var totalNQueens = function(n) {
  let count = 0;
  let DFS = function(n, row, col, left, right) {
    if (row >= n) {
      count++;
      return;
    }
    let bits = ~(col | left | right) & ((1 << n) - 1);
    while (bits) {
      let p = bits & -bits;
      bits &= bits - 1;
      DFS(n, row + 1, col | p, (left | p) << 1, (right | p) >> 1);
    }
  };
  DFS(n, 0, 0, 0, 0);
  return count;
};

totalNQueens(4);
