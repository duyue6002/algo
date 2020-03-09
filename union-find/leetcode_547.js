/**
 *
 * @param {number[][]} M
 * @param {number[]} visited
 * @param {number} i
 */
var dfs = function(M, visited, i) {
  for (let j = 0; j < M.length; j++) {
    if (M[i][j] === 1 && visited[j] === 0) {
      visited[j] = 1;
      dfs(M, visited, j);
    }
  }
};

/**
 * @param {number[][]} M
 * @return {number}
 */
var findCircleNum = function(M) {
  let visited = Array(M.length).fill(0);
  let count = 0;
  for (let i = 0; i < M.length; i++) {
    if (visited[i] === 0) {
      dfs(M, visited, i);
      count++;
    }
  }
  return count;
};

/**
 *
 * @param {number[][]} M
 */
var findCircleNum = function(M) {
  if (M.length === 0) return 0;
  let length = M.length;
  let count = length;
  let parent = Array(length);
  for (let i = 0; i < length; i++) {
    parent[i] = i;
  }

  // 找到元素所在集合 parent
  let find = function(n) {
    while (n !== parent[n]) {
      parent[n] = parent[parent[n]];
      n = parent[n];
    }
    return n;
  };

  let union = function(p, q) {
    let P = find(p),
      Q = find(q);
    if (P === Q) return;
    parent[P] = Q;
    count--;
  };

  for (let i = 0; i < length; i++) {
    for (let j = 0; j < length; j++) {
      if (M[i][j] === 1) {
        union(i, j);
      }
    }
  }

  return count;
};

findCircleNum([
  [1, 0, 0, 1],
  [0, 1, 1, 0],
  [0, 1, 1, 1],
  [1, 0, 1, 1]
]);
