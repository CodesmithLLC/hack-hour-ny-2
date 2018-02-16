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

function zip(l1, l2) {
  let l1TempNext = l1.head.next;
  let l1TempNextTwo = l1TempNext.next;
  let l2TempNext = l2.head.next;
  let l2TempNextTwo = l2TempNext.next;
  if(l2.head === null) {
    return l1;
  }
  if (l1.head === null) {
    return l2;
  }

  if(l1.head) {
    while(l1TempNextTwo.next != null && l2TempNextTwo.next != null) {
      
      // (re)set l1.currentNode before proceeding and changing
      l1.currentNode = l1.head.next;
      l1.head.next = l2.head;
      
      // (re)set l2.currentNode before proceeding
      l2.currentNode = l2.head.next;
      l2.head.next = l1TempNext;
      // update l1TempNext and l1TempNextTwo, also add condition to check if next node exists (to check end of each LL)
      // if(l1TempNextTwo != null) {
        l1TempNext = l1TempNextTwo;
        l1TempNextTwo = l1TempNextTwo.next;
      // }
      
      l1.currentNode.next = l2TempNext;
      //update L2TempNext and L2TempNextTwo
      // if (l1TempNextTwo != null) {
        l2TempNext = l2TempNextTwo;
        l2TempNextTwo = l2TempNextTwo.next;
      // }
      
      // ... and so on and so on it goes
      

    }
  }
};

module.exports = {Node: Node, zip: zip};
