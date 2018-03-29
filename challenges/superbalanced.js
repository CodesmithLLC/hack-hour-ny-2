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

function superbalanced(node) {

  let lh; /* for height of left subtree */
  
  let rh; /* for height of right subtree */
  
  /* If tree is empty then return true */
   if (node == null) return true;

   /* Get the height of left and right sub trees */
   lh = height(node.left);
   rh = height(node.right);
  
    if (Math.abs(lh - rh) <= 1
        && superbalanced(node.left)
        && superbalanced(node.right)) {
      return true;
    }
            
    /* If we reach here then tree is not height-balanced */
     return false;

  }


/* UTILITY FUNCTIONS TO TEST isBalanced() FUNCTION */
    /*  The function Compute the "height" of a tree. Height is the
        number of nodes along the longest path from the root node
        down to the farthest leaf node.*/
    

function height(node){
   if(!node) return 0;
   let leftHeight = height(node.left);
   let rightHeight = height(node.right);

   return Math.max(leftHeight, rightHeight) + 1;
}






module.exports = {BinaryTree: BinaryTree, superbalanced: superbalanced};
