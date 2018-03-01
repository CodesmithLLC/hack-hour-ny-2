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

 function validBST(tree, max=Infinity, min=-Infinity) {
   let resultLeft, resultRight;
   console.log(max,min);
   if (tree.value > max) return false;
   if (tree.value < min) return false;
   if (!tree.left && !tree.right) return true;
   if (tree.left) {
     const newMax = tree.value;
     if (tree.left.value > tree.value) return false;
     if (tree.left.value > max) return false;
     if (tree.left.value < min) return false;
     resultLeft = validBST(tree.left, newMax, min);
   }
   if (tree.right) {
     const newMin = tree.value;
     if (tree.right.value < tree.value) return false;
     if (tree.right.value > max) return false;
     if (tree.right.value < min) return false;
     resultRight = validBST(tree.right, max, newMin);
   }
   return resultLeft && resultRight;
 }

module.exports = {BinaryTree: BinaryTree, validBST: validBST};
