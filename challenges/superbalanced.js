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

BinaryTree.prototype.inOrderTraverse = function(cb) {
  if (!this) return;

  if (this.left) {
    this.left.inOrderTraverse(cb);
  }

  cb(this.value);

  if (this.right) {
    this.right.inOrderTraverse(cb);
  }
}

function superbalanced(tree) {
  let prev = null;
  let left = 0;
  let right = 0;
  tree.inOrderTraverse(function(value) {
    if (!prev) prev = value;
    else {
      if (value < prev) {
        left++
      } else {
        right++;
      }
    }
  });
  let lb = Math.ceil(left / 2);
  let rb = Math.ceil(right / 2);
  if (lb - rb > 1) return false;
  else return true;  
}

module.exports = {BinaryTree: BinaryTree, superbalanced: superbalanced};
