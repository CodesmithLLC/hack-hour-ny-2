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
 // if length left and length right difference is < 2 
 // recursively call this.left. while this.left is !== null && this.right !== null, superbalanced(this.left), superbalanced this.right
 // if count is difference is greater than 2, return false; 
 let countleft = 0;
 countright = 0;  

(function wrapper(tree){
 while(tree.left !== null && tree.right !== null){
 	countleft += wrapper(tree.left)
 	countright += wrapper(tree.right)
 }

if(tree.left !== null && tree.right === null){
	countleft += wrapper(tree.right)
}

if(tree.left === null && tree.right !== null){
	countright += wrapper(tree.left)
}
 return 1; 
})(); 

if(countleft !== countright)
	return false
return true; 
}

module.exports = {BinaryTree: BinaryTree, superbalanced: superbalanced};
