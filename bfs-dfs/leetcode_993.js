/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} x
 * @param {number} y
 * @return {boolean}
 */
var isCousins = function (root, x, y) {
  let queue = [root];
  while (queue.length > 0) {
    let size = queue.length;
    let xx = false,
      yy = false;
    for (let i = 0; i < size; i++) {
      let node = queue.shift();
      if (node.val === x) xx = true;
      if (node.val === y) yy = true;
      if (node.left && node.right) {
        if (node.left.val === x && node.right.val === y) return false;
        if (node.left.val === y && node.right.val === x) return false;
      }
      if (node.left) {
        queue.push(node.left);
      }
      if (node.right) {
        queue.push(node.right);
      }
    }
    if (xx && yy) return true;
    else if (xx || yy) return false;
  }
  return false;
};
