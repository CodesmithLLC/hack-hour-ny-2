/**
 * Write a function deleteDups that removes duplicates from an unsorted linked list.
 *
 * Example:
 * 1->2->3->3
 *
 * deleteDups(head); -> 1->2->3
 *
 * Extra:
 * How would you solve this problem if a temporary buffer is not allowed?
 */



 function deleteDups(head) {
   const buffer = [];
   let newlist = head;
   let prev = head;
   buffer.push(prev.value);
   let curr = head.next;
   while (curr) {
     if (buffer.includes(curr.value)) {
       curr = curr.next;
       prev.next = curr;
     } else {
       buffer.push(curr.value);
       prev = curr;
       curr = curr.next;
     }
   }
   return newlist
 }

module.exports = deleteDups;
