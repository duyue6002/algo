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
 * @param {number} sum
 * @return {number[][]}
 */
var pathSum = function (root, sum) {
  let result = [];
  helper(root, sum, 0, [], result);
  return result;
};

var helper = function (node, sum, cur, path, result) {
  if (!node) return;
  path.push(node.val);
  cur += node.val;
  if (cur === sum && !node.left && !node.right) {
    result.push(path.slice());
  }
  if (node.left) {
    helper(node.left, sum, cur, path, result);
  }
  if (node.right) {
    helper(node.right, sum, cur, path, result);
  }
  path.pop();
};
