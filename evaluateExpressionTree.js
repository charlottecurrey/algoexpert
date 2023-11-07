class BinaryTree {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

function evaluateExpressionTree({ value, left, right }) {
  // Write your code here.
  if (value === -1)
    return evaluateExpressionTree(left) + evaluateExpressionTree(right);
  if (value === -2)
    return evaluateExpressionTree(left) - evaluateExpressionTree(right);
  if (value === -3)
    return Math.trunc(
      evaluateExpressionTree(left) / evaluateExpressionTree(right)
    );
  if (value === -4)
    return evaluateExpressionTree(left) * evaluateExpressionTree(right);
  return value;
}

// Do not edit the lines below.
exports.BinaryTree = BinaryTree;
exports.evaluateExpressionTree = evaluateExpressionTree;
