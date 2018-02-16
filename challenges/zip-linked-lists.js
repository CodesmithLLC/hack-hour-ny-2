/* Merge two linked lists so that their nodes alternate. Let the first node of the zipped list be
 * the first node of the first argument, if it exists.
 * Implement the linked list using only a Node class. No need for a wrapper LinkedList class
 *
 * BONUS: Do this in place
 */

function Node(val) {
  this.value = val;
  this.next = null;
}

// function create(arr){
//   let prev = null;
//   let current = null;
//   let start = null;
//
//   arr.forEach((val, i) => {
//     prev = current;
//     current = new Node(val);
//     if(prev){
//       prev.next = current;
//     }
//     else {
//       start = current;
//     }
//   });
//   return start;
// }

function zip(l1, l2) {
  let currentOne = l1;
  let currentTwo = l2;

  while(currentOne !== null && currentTwo !== null){
    let tempOne = currentOne.next;
    currentOne.next = new Node(currentTwo.value);
    currentOne.next.next = tempOne;

    currentOne = tempOne;
    currentTwo = currentTwo.next;
  }

  return l1;
};

// const listOne = create([0, 2, 4]);
// const listTwo = create([1, 3, 5]);
//
// zip(listOne, listTwo);
// console.log(JSON.stringify(listOne, null, 4))

module.exports = {Node: Node, zip: zip};
