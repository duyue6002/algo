/**
 * @param {character[][]} board
 * @param {string[]} words
 * @return {string[]}
 */
var findWords = function(board, words) {
  let row = board.length;
  if (row === 0) return [];
  let col = board[0].length;
  if (words.length === 0) return [];
  let trie = new Trie();
  words.forEach(word => trie.insert(word));
  let result = [];
  let visited = Array.from(Array(row), () => Array(col).fill(false));
  for (let i = 0; i < row; i++) {
    for (let j = 0; j < col; j++) {
      DFS(board, visited, i, j, "", trie, result);
    }
  }
  return [...new Set(result)];
};

var Trie = function() {
  let root = {};

  let insert = function(word) {
    let cur = root;
    for (let ch of word) {
      cur = cur[ch] = cur[ch] || {};
    }
    cur.isWord = true;
  };

  let traverse = function(word) {
    let cur = root;
    for (let ch of word) {
      if (!cur) return false;
      cur = cur[ch];
    }
    return cur;
  };

  let search = function(word) {
    let node = traverse(word);
    return !!node && !!node.isWord;
  };

  let startWith = function(prefix) {
    return !!traverse(prefix);
  };

  return { insert, search, startWith };
};

let dx = [-1, 1, 0, 0];
let dy = [0, 0, -1, 1];

var DFS = function(board, visited, i, j, str, trie, result) {
  if (i < 0 || i >= board.length || j < 0 || j >= board[0].length) return;
  if (visited[i][j]) return;
  str += board[i][j];
  if (!trie.startWith(str)) return;
  if (trie.search(str)) {
    result.push(str);
  }
  visited[i][j] = true;

  for (let k = 0; k < 4; k++) {
    let x = i + dx[k],
      y = j + dy[k];
    DFS(board, visited, x, y, str, trie, result);
  }
  visited[i][j] = false;
};

let board = [
  ["o", "a", "a", "n"],
  ["e", "t", "a", "e"],
  ["i", "h", "k", "r"],
  ["i", "f", "l", "v"]
];
let words = ["oath", "pea", "eat", "rain"];

findWords(board, words);
