/* You are given a tree. Write a function to check if it is a valid binary search tree. A tree is
 * a valid binary search tree if it satisfies the following constraints:
 *      at any given node, the value of all the nodes in its left tree must be < its value
 *      at any given node, the value of all the nodes in its right tree must be > its value
 * Assume that each value in the tree is unique.
 */
 

// function BinaryTree(val) {
//     this.value = val;
//     this.left = null;
//     this.right = null;
// }

// function validBST(tree) {
// 	if(!tree.left && !tree.right) return true
// 	if(tree.value > tree.left.value || tree.value < tree.right.value) return false
// 	return checkLeft(tree.left) && checkRight(tree.right)
// }

// function checkLeft(leftNode) {
// 	return validBST(leftNode)
// }

// function checkRight(rightNode) {
// 	return validBST(rightNode)
// }


module.exports = {BinaryTree: BinaryTree, validBST: validBST};
