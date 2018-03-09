/* You are given a tree. Write a function to check if it is a valid binary search tree. A tree is
 * a valid binary search tree if it satisfies the following constraints:
 * at any given node, the value of all the nodes in its left tree must be < its value
 * at any given node, the value of all the nodes in its right tree must be > its value
 * Assume that each value in the tree is unique.
 */
 

function BinaryTree(val) {
    this.value = val;
    this.left = null;
    this.right = null;
}

BinaryTree.prototype.add = function(val) {
	if (this === null) return new BinaryTree(val);

	if (this.left === null && val < this.value) {
		this.left = new BinaryTree(val);
		return this.left;
	}

	if (this.right === null && val > this.value) {
		this.right = new BinaryTree(val);
		return this.right;
	}

	if (val > this.value) return this.right.add(val);

	if (val < this.value) return this.left.add(val);
};

function validBST(tree) {
	// at any given node, the value of all the nodes in its left tree must be < its value
	// at any given node, the value of all the nodes in its right tree must be > its value
	let lastVal = Number.NEGATIVE_INFINITY; 
	let isValid = true;

	function compare(node) {
		//if (!isValid || !node) 
		if (node.left) compare(node.left);

		// if node.value < lastVal, is valid is false
		if (node.value < lastVal) isValid = false;
		// else set lastVal to node.value
		else lastVal = node.value;

		if (node.right) compare(node.right)
	}

	compare(tree);
	return isValid;
}

const tree = new BinaryTree(5);
tree.add(7);
tree.add(2);
tree.add(3);
tree.add(6);

// //console.log(tree)
console.log(validBST(tree));


module.exports = {BinaryTree: BinaryTree, validBST: validBST};
