/**
 * 单向 BFS
 * @param {string} start
 * @param {string} end
 * @param {string[]} bank
 * @return {number}
 */
var minMutation = function(start, end, bank) {
  if (!bank.includes(end)) return -1;
  let queue = [];
  queue.push(start);
  let ladder = 0;
  let dict = new Set(bank);

  while (queue.length !== 0) {
    let length = queue.length;
    for (let i = 0; i < length; i++) {
      let word = queue.shift();
      if (word === end) return ladder;
      for (let j = 0; j < word.length; j++) {
        for (let ch of ["A", "G", "T", "C"]) {
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
  return -1;
};

minMutation("AAAAAAAA",
"CCCCCCCC",
["AAAAAAAA","AAAAAAAC","AAAAAACC","AAAAACCC","AAAACCCC","AACACCCC","ACCACCCC","ACCCCCCC","CCCCCCCA","CCCCCCCC"]);
