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

let bt = new BinaryTree(5);
bt.left = new BinaryTree(4);
bt.right = new BinaryTree(7);
bt.right.left = new BinaryTree(6);

function validBST(tree, headVal = tree.value) {
	if (tree === null) return true;
	//console.log(tree.value)

	if (tree.left !== null && tree.right !== null){
		if (tree.left.value > tree.value || tree.right.value < tree.value)
			return false;
	}

	if (tree.left === null && tree.right === null) return true;

	if (tree.left === null && tree.right !== null){
		if (tree.right.value < tree.value) return false;
	}

	if (tree.right === null && tree.left !== null){
		if (tree.left.value > tree.value) return false;
	}

	
	return validBST(tree.left) && validBST(tree.right);
}

//console.log(validBST(bt));

module.exports = {BinaryTree: BinaryTree, validBST: validBST};
