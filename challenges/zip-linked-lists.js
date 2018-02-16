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
   let zipped = {};
   let nextl1 = l1;
   let nextl2 = l2;
   let i = 0;
   while (nextl1.next) {
     zipped[i] = nextl1.value;
     i++;
     zipped[i] = nextl2.value;
     i++;
     nextl1 = nextl1.next;
     nextl2 = nextl2.next;
   }
   zipped[i] = nextl1.value;
   zipped[i+1] = nextl2.value;
   return zipped;
 }

module.exports = {Node: Node, zip: zip};
