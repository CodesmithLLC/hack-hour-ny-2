/* Merge two linked lists so that their nodes alternate. Let the first node of the zipped list be
 * the first node of the first argument, if it exists.
 * Implement the linked list using only a Node class. No need for a wrapper LinkedList class
 *
 * BONUS: Do this in place
 */

 // Iterative

 function zip (l1, l2) {
   if (!l1) return l2;
   if (!l2) return l1;

   var head = l1;
   var temp = l1;

   l1 = l1.next;

   while (l2 && l1) {
     temp.next = l2;
     l2 = l2.next;
     temp = temp.next;
     temp.next = l1;
     l1 = l1.next;
     temp = temp.next;
   }

   temp.next = l2 ? l2 : l1;
   return head;
 }

 // Recursive
 function zip (l1, l2) {
   if (!l1) return l2;
   if (!l2) return l1;

   var curr = new Node(l1.value);
   curr.next = zip(l2, l1.next);
   return curr;
 }


 // Add CommentCollapse 

module.exports = {Node: Node, zip: zip};
