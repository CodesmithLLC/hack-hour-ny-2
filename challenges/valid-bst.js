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

// BinaryTree.prototype.insert = function(val){
//   let current = this;
//   let direction = (val > current.value) ? 'right': 'left';
//   let next = current[direction];
//
//   while(next !== null){
//     current = next;
//     direction = (val > current.value) ? 'right': 'left';
//     next = current[direction]
//   }
//
//   current[direction] = new BinaryTree(val);
// }

BinaryTree.prototype.traverse = function(cb) {
  // left, center, right
  if(!this){
    return;
  }

  if(this.left){
    this.left.traverse(cb);
  }
  cb(this.value);
  if(this.right){
    this.right.traverse(cb);
  }
}

function validBST(tree) {
  // let arr = [];
  let prev = null;
  let result = true;
  tree.traverse(function(val){
    // arr.push(val)
    result = result && (prev === null || prev <= val);
    prev = val;
  });

  return result;

  // let prev = arr[0]
  // return arr.slice(1).reduce((bool, val) => {
  //   const result = bool && prev <= val;
  //   prev = val;
  //   return result;
  // }, true);
}

// let bt = new BinaryTree(10);
// const ins = [5, 3, 11, 1, 4, 7, 9, 15, 12, 16];
// ins.forEach((val) => {
//   bt.insert(val);
// })
// console.log(JSON.stringify(bt, null, 4));
// console.log(validBST(bt));

module.exports = {BinaryTree: BinaryTree, validBST: validBST};
