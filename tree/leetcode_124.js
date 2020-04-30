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
 * @return {number}
 */
var maxPathSum = function (root) {
  let max = Number.MIN_SAFE_INTEGER;
  function helper(node) {
    if (!node) return 0;
    let left = Math.max(0, helper(node.left));
    let right = Math.max(0, helper(node.right));
    max = Math.max(max, left + right + node.val);
    return Math.max(left, right) + node.val;
  }
  helper(root);
  return max;
};
