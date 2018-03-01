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

function validBST(tree, compare) {
	// at any given node, the value of all the nodes in its left tree must be < its value
	// at any given node, the value of all the nodes in its right tree must be > its value
	// all the nodes on the left have to be less than the tree head
	// all the nodes on the right have to be less than the tree head
	const head = tree;
	let current = tree;

	while (current.left) {
		current = tree.left;
		if (current.value > head.value) return false;
	}

	current = head;
	
	while(current.right) {
		current = tree.right;
		if (current.value < head.value) return false;
	}

	return true;
}

// const tree = new BinaryTree(5);
// tree.add(7);
// tree.add(2);
// tree.add(3);
// tree.add(6);

// //console.log(tree)
// console.log(validBST(tree, compare));
	// Base case: left is null or right is null, return true
	// if (tree.left !== null) {
	// 	// if current value is greater than left, call valid BST on left
	// 	if (tree.value > tree.left.value) {
	// 		console.log('tv', tree.value)
	// 		console.log('tl', tree.left.value)
	// 		return validBST(tree.left);
	// 	}
	// 	// else return false
	// 	else {
	// 		return false;
	// 	}
	// } else if (tree.right !== null) {
	// 	// if current value is less than right, call valid BST on right
	// 	if (tree.value < tree.right.value) {
	// 		console.log('tv', tree.value)
	// 		console.log('tr', tree.right.value)
	// 		return validBST(tree.right)
	// 	}
	// 	// else return false
	// 	else {
	// 		return false;
	// 	}
	// } else {
	// 	return true;
	// }
	
	// if (tree !== null) {
	// 	if(tree.left && compare(tree.value, tree.left.value)) {
	// 		console.log('tv', tree.value)
	// 		console.log('tl', tree.left)
	// 		return validBST(tree.left);
	// 	} else {
	// 		console.log('f1')
	// 		return false;
	// 	}

	// 	if(tree.right && compare(tree.right.value, tree.value)) {
	// 		console.log('tv', tree.value)
	// 		console.log('tr', tree.right)
	// 		return validBST(tree.right);
	// 	} else {
	// 		console.log('f2')
	// 		return false;
	// 	}

	// } else {
	// 	return true;
	// }


module.exports = {BinaryTree: BinaryTree, validBST: validBST};
