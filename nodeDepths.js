function nodeDepths(root) {
  // Write your code here.
  let stack = [[root, 0]],
    depths = 0;
  while (stack.length) {
    let [node, depth] = stack.pop();
    depths += depth;
    node.left && stack.push([node.left, depth + 1]);
    node.right && stack.push([node.right, depth + 1]);
  }
  return depths;
}

// This is the class of the input binary tree.
class BinaryTree {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

// Do not edit the line below.
exports.nodeDepths = nodeDepths;
