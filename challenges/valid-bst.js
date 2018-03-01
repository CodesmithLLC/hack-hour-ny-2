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

function validBST(tree) {
    //check if the current node and its children are valid
    if (tree.left && tree.left.value > tree.value) return false;
    if (tree.right && tree.right.value < tree.value) return false;
    // define case if tree is null
    if (!tree.left && !tree.right) return true;
    //traverse the tree preorder
    if (tree.left) return validBST(tree.left);
    if (tree.right) return validBST(tree.right);
}

module.exports = {BinaryTree: BinaryTree, validBST: validBST};
