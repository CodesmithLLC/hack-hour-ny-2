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
  if (!tree.left && !tree.right) return true;
  //difference between the height of the left and right trees
  if (!tree.right)
    return (Math.abs(getTreeHeight(tree.left) - getTreeHeight(tree.right)) <= 1) && superbalanced(tree.left);
  if (!tree.left)
    return (Math.abs(getTreeHeight(tree.left) - getTreeHeight(tree.right)) <= 1) && superbalanced(tree.right);
  if (tree.left && tree.right)
    return (Math.abs(getTreeHeight(tree.left) - getTreeHeight(tree.right)) <= 1) && superbalanced(tree.left) && superbalanced(tree.right);

}

function getTreeHeight(tree, count = 0) {
  if (!tree) return count;
  if (!tree.left && !tree.right) return count + 1;
  // if count is even then its balanced if odd it's not;
  if (tree.left && tree.right) return getTreeHeight(tree.left, count + 1) + getTreeHeight(tree.right, count + 1);

  if (tree.left) return getTreeHeight(tree.left, count + 1);
  if (tree.right) return getTreeHeight(tree.right, count + 1);
}




module.exports = {BinaryTree: BinaryTree, superbalanced: superbalanced};
