/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var diameterOfBinaryTree = function (root) {
  let max = 0;
  function depth(node) {
    if (!node) return 0;
    let left = depth(node.left);
    let right = depth(node.right);
    max = Math.max(left + right, max);
    return Math.max(left, right);
  }
  depth(root);
  return max;
};
