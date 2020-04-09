/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function (root) {
  if (!root) return [];
  let queue = [root],
    res = [];
  while (queue.length > 0) {
    let size = queue.length;
    let level = [];
    for (let i = 0; i < size; i++) {
      let node = queue.shift();
      level.push(node.val);
      if (node.left) {
        queue.push(node.left);
      }
      if (node.right) {
        queue.push(node.right);
      }
    }
    res.push(level);
  }
  return res;
};
