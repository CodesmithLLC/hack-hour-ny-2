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

// BinaryTree.prototype.create = function(arr){
//   if(!arr.length){
//     return;
//   }
//
//   const value = arr[arr.length - 1];
//   let current = this;
//
//   while(true){
//     if(value < current.value){
//       if(!current.left){
//         current.left = new BinaryTree(value);
//         break;
//       }
//       else {
//         current = current.left;
//       }
//     }
//     else {
//       if(!current.right){
//         current.right = new BinaryTree(value);
//         break;
//       }
//       else {
//         current = current.right;
//       }
//     }
//   }
//
//   arr.pop();
//   this.create(arr);
// }


BinaryTree.prototype.traverse = function(cb){
  cb(this);
  if(this.left){
    this.left.traverse(cb);
  }
  if(this.right){
    this.right.traverse(cb);
  }
}

function findHeight(nodeArr, height = 0){
  if(!nodeArr.length){
    return height;
  }

  const newArr = [];
  nodeArr.forEach((node) => {
    if(node && node.left){
      newArr.push(node.left)
    }
    if(node && node.right){
      newArr.push(node.right)
    }
  });

  return findHeight(newArr, height + 1);
}

function superbalanced(tree) {
  // make sure the left and right binary tree never have a height
  // difference greater than 1
  let result = true;
  tree.traverse((node) => {
    const diff = Math.abs(findHeight([node.left]) - findHeight([node.right]));
    result = result && diff <= 1;
  })
  return result;
}

// const unbalanced = new BinaryTree(10);
// unbalanced.create([5, 7, 9, 11, 3, 2])
// console.log(JSON.stringify(unbalanced, null, 4));
// console.log(superbalanced(unbalanced));
//
// const balanced = new BinaryTree(10);
// balanced.create([6, 2, 7, 13, 5, 12])
// console.log(JSON.stringify(balanced, null, 4));
// console.log(superbalanced(balanced));

module.exports = {BinaryTree: BinaryTree, superbalanced: superbalanced};
