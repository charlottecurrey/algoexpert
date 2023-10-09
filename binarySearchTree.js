function findClosestValueInBst(tree, target) {
  // Write your code here.
  let closest = null;
  let closestRange = Infinity;
  let treeNode = tree;

  while (treeNode !== null) {
    if (Math.abs(treeNode.value - target) <= closestRange) {
      closestRange = Math.abs(treeNode.value - target);
      closest = treeNode.value;
    }
    if (closestRange === 0) {
      break;
    }
    if (target < treeNode.value) {
      treeNode = treeNode.left;
    } else {
      treeNode = treeNode.right;
    }
  }
  return closest;
}

// This is the class of the input tree. Do not edit.
class BST {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}
