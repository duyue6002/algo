var invertTree = function (root) {
  if (!root) return null;
  invertTree(root.left);
  invertTree(root.right);
  [root.left, root.right] = [root.right, root.left];
  return root;
};

var invertTree = function (root) {
  if (!root) return null;
  let queue = [root];
  while (queue.length > 0) {
    const node = queue.shift();
    [node.left, node.right] = [node.right, node.left];
    node.left && queue.push(node.left);
    node.right && queue.push(node.right);
  }
  return root;
};
