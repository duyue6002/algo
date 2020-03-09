/**
 * @param {number[][]} board
 * @return {number}
 */
var slidingPuzzle = function(board) {
  let moves = {
    0: [1, 3],
    1: [0, 2, 4],
    2: [1, 5],
    3: [0, 4],
    4: [1, 3, 5],
    5: [2, 4]
  };
  let count = 0;
  let used = [];
  let queue = [];
  queue.push(board.flat().join(""));
  while (queue.length !== 0) {
    let length = queue.length;
    for (let i = 0; i < length; i++) {
      let s = queue.shift();
      used.push(s);
      if (s === "123450") {
        return count;
      }
      let index = s.indexOf("0");
      for (let move of moves[index]) {
        let newArr = s.split("");
        [newArr[index], newArr[move]] = [newArr[move], newArr[index]];
        if (!used.includes(newArr.join(""))) {
          queue.push(newArr.join(""));
        }
      }
    }
    count++;
  }
  return -1;
};

slidingPuzzle([
  [1, 2, 3],
  [4, 0, 5]
]);
