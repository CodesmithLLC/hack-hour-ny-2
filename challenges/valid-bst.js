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

function validBST(tree) {
  let current = tree;
  if (tree === null) return true;
  if (current.left) {
    if (current.left.value > current.value) return false;
    if (current.left.left) {
      if (current.left.left.value > current.value) return false;
    }
    if (current.left.right) {
      if (current.left.right.value > current.value) return false;
    }
  }
  if (current.right) {
    if (current.right.value < current.value) return false;
    if (current.right.right) {
      if (current.right.right.value < current.value) return false;
    }
    if (current.right.left) {
      if (current.right.left.value < current.value) return false;
    }
  }
  if (!validBST(current.left, current.value) || !validBST(current.right, current.value)) return false;
  else return true;
}

module.exports = {BinaryTree: BinaryTree, validBST: validBST};
