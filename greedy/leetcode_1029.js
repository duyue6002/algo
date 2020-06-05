/**
 * @param {number[][]} costs
 * @return {number}
 */
var twoCitySchedCost = function (costs) {
  let res = 0;
  costs.sort((a, b) => b[1] - b[0] - a[1] + a[0]);
  const N = costs.length;
  for (let i = 0; i < N; i++) {
    if (i < N / 2) {
      res += costs[i][0];
    } else {
      res += costs[i][1];
    }
  }
  return res;
};
