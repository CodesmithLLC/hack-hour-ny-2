/* You are given a tree. Write a function to check if it is a valid binary search tree. A tree is
 * a valid binary search tree if it satisfies the following constraints:
 *      at any given node, the value of all the nodes in its left tree must be < its value
 *      at any given node, the value of all the nodes in its right tree must be > its value
 * Assume that each value in the tree is unique.
 */


function BinaryTree(val) {
  this.value = val;
  this.left = null;
  this.right = null;
}

function isBSTUtility(node, mini, maxi) {
  if (node === null) return true;
  if (node.value < mini || node.value > maxi) return false;
  return isBSTUtility(node.left, node.value - 1, maxi) &&
  isBSTUtility(node.right, mini, node.value + 1);
}

function validBST(tree) {
  return isBSTUtility(tree, Number.MIN_SAFE_INTEGER, Number.MAX_SAFE_INTEGER);
}

module.exports = { BinaryTree, validBST };
