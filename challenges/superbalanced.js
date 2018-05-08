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

const A = new BinaryTree(2);
A.left = new BinaryTree(1);
A.left.left = new BinaryTree(0)
A.right = new BinaryTree(3);
A.right.right = new BinaryTree(4)
A.right.left = new BinaryTree(3.5)

const height = (node) => {
		if (node === null) return 0;
		return Math.max(height(node.left), height(node.right)) + 1;
	}

function superbalanced(tree) {
	if (tree === null) return true;

	let heightDif = height(tree.left) - height(tree.right);
	if (Math.abs(heightDif)>1) return false;
	else return superbalanced(tree.left) && superbalanced(tree.right);

}

//console.log(superbalanced(A))

module.exports = {BinaryTree: BinaryTree, superbalanced: superbalanced};
