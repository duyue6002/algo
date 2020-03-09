/**
 * BFS
 * @param {string} beginWord
 * @param {string} endWord
 * @param {string[]} wordList
 * @return {number}
 */
var ladderLength = function(beginWord, endWord, wordList) {
  let queue = [];
  let dict = new Set(wordList);
  queue.push(beginWord);
  let ladder = 1;
  let alphabet = Array(26)
    .fill(1)
    .map((_, i) => String.fromCharCode(97 + i));
  while (queue.length !== 0) {
    let length = queue.length;
    for (let i = 0; i < length; i++) {
      let word = queue.shift();
      if (word === endWord) return ladder;
      for (let j = 0; j < word.length; j++) {
        for (let ch of alphabet) {
          let tmp = word.slice(0, j) + ch + word.slice(j + 1);
          if (dict.has(tmp)) {
            queue.push(tmp);
            dict.delete(tmp);
          }
        }
      }
    }
    ladder++;
  }
  return 0;
};

/**
 * BFS
 * @param {string} beginWord
 * @param {string} endWord
 * @param {string[]} wordList
 * @return {number}
 */
var ladderLength = function(beginWord, endWord, wordList) {
  if (!wordList.includes(endWord)) return 0;
  let beginQueue = [],
    endQueue = [];
  beginQueue.push(beginWord);
  endQueue.push(endWord);
  let ladder = 1;
  let dict = new Set(wordList);

  let alphabet = Array(26)
    .fill(1)
    .map((_, i) => String.fromCharCode(97 + i));
  while (beginQueue.length !== 0 && endQueue.length !== 0) {
    if (beginQueue.length > endQueue.length) {
      [beginQueue, endQueue] = [endQueue.slice(), beginQueue.slice()];
    }
    let length = beginQueue.length;
    for (let i = 0; i < length; i++) {
      let word = beginQueue.shift();
      for (let j = 0; j < word.length; j++) {
        for (let ch of alphabet) {
          let tmp = word.slice(0, j) + ch + word.slice(j + 1);
          if (endQueue.includes(tmp)) {
            return ladder + 1;
          }
          if (dict.has(tmp)) {
            beginQueue.push(tmp);
            dict.delete(tmp);
          }
        }
      }
    }
    ladder++;
  }
  return 0;
};

ladderLength("hit", "cog", ["hot", "dot", "dog", "lot", "log"]);
