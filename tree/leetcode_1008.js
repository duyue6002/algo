/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} preorder
 * @return {TreeNode}
 */
var bstFromPreorder = function (preorder) {
  const root = new TreeNode(preorder[0]);
  construct(root, preorder, 1, preorder.length);
  return root;
};

var construct = function (node, preorder, start, end) {
  if (start === end) return;
  let rightIndex = end;
  for (let i = start; i < end; i++) {
    if (i === start && preorder[i] < node.val) {
      node.left = new TreeNode(preorder[i]);
    }
    if (preorder[i] > node.val) {
      node.right = new TreeNode(preorder[i]);
      rightIndex = i;
      break;
    }
  }
  node.left && construct(node.left, preorder, start + 1, rightIndex);
  node.right && construct(node.right, preorder, rightIndex + 1, end);
  return node;
};
