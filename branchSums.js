// This branchSums function is recursively traversing a binary tree and calculating the branch sums at each node. Here is an explanation of how it works:

// It takes in the root node of the binary tree, a running sum (initialized to 0), and an empty array to store the final branch sums.
// At each node, it calculates the currentSum by taking the node's value and adding it to the running sum passed in from the parent call.
// It checks if the current node is a leaf node (no left or right child). If so, it pushes the currentSum into the sums array.
// If there is a left child, it recursively calls branchSums on the left child, passing in the currentSum and sums array.
// Similarly for the right child, if it exists.
// This allows it to traverse down the entire tree, calculating the running sum at each node. When it hits a leaf, that running sum is the branch sum for that leaf so it gets added to the array.
// Finally, it returns the sums array which now contains all the branch sums in the tree.
// So by doing a depth-first traversal and tracking the running sum at each node, we can efficiently calculate all branch sums in a binary tree. The recursion allows us to traverse the entire tree and the running sum allows us to incrementally calculate the final branch sums to return.

// This is the class of the input root.
// Do not edit it.
class BinaryTree {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

function branchSums(root, sum = 0, sums = []) {
  // Write your code here.
  const currentSum = root.value + sum;

  if (!root.left && !root.right) {
    sums.push(currentSum);
  }
  if (root.left) {
    branchSums(root.left, currentSum, sums);
  }
  if (root.right) {
    branchSums(root.right, currentSum, sums);
  }
  return sums;
}

// Do not edit the lines below.
exports.BinaryTree = BinaryTree;
exports.branchSums = branchSums;
