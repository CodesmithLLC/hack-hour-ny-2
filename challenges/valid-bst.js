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
    if (!tree) return true;
    // define case if tree is null
    if (!tree.left && !tree.right) return true;
    //check if sibilings are valid
    if (tree.left && tree.right) {
        if(tree.left.value > tree.right.value) return false;
    }
    
    if (tree.left) {
        //check if the current node and its children are valid
        if (tree.left.value > tree.value) return false;
        //check if the current node's granchildren are valid
        if (tree.left.left && tree.left.left.value > tree.left.value) return false;
        if (tree.left.right && tree.left.right.value > tree.left.value) return false;
    }
    if (tree.right) {
        //check if the current node and its children are valid
        if (tree.right.value < tree.value) return false;


        //check if the current node's granchildren are valid
        if (tree.right.left && tree.right.left.value > tree.right.value) return false;
        if (tree.right.right && tree.right.right.value < tree.right.value) return false;
    }
    //traverse the tree preorder
    if (tree.left) return validBST(tree.left);
    if (tree.right) return validBST(tree.right);
}

module.exports = {BinaryTree: BinaryTree, validBST: validBST};
