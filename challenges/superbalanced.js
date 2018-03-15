/**
 * Write a function to see if a binary tree "superbalanced".
 * An empty tree is balanced. A non-empty binary tree T is balanced if:
1) Left subtree of T is balanced
2) Right subtree of T is balanced
3) The difference between heights of left subtree and right subtree is not more than 1.
example: http://www.geeksforgeeks.org/wp-content/uploads/balanced_tree.GIF
 */

function BinaryTree(value) {
  this.value = value;
  this.left = null;
  this.right = null;
}

function superbalanced(tree) {
  let levels = breathFirstSearch(tree);

  return (levels%2 === 0) ? true : false;
}

function breathFirstSearch(tree, count = 0) {
  if(!tree.left && !tree.right) return count;
  // if count is even then its balanced if odd it's not;
  if(tree.left && tree.right) return breathFirstSearch(tree.left, count +1) + breathFirstSearch(tree.right, count + 1);

  if(tree.left) return breathFirstSearch(tree.left, count + 1);
  if(tree.right) return breathFirstSearch(tree.right, count + 1);
}


module.exports = {BinaryTree: BinaryTree, superbalanced: superbalanced};
