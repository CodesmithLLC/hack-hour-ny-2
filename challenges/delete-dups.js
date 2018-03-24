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

function Node(value) {
  this.value = value;
  this.next = null;
}

let a = new Node(1);
a.next = new Node(3);
a.next.next = new Node(2);
a.next.next.next = new Node(2);

console.log(deleteDups(a));


function deleteDups(head) {
  if(!head || !head.next) return;
  //Without temp buffer, sort the LL
  //And as you sort the LL, if you come across a dup, remove and store it two a new LL
  // return new LL
  let prev = head;
  let curr = prev.next;
  // let temp = node;

  while (curr) {
    if (curr.value === prev.value) {
      // remove dup from LL
      prev.next = prev.next.next;
      prev = head;
    } else prev = curr;
    curr = prev.next;
  }
  return head;
}

module.exports = deleteDups;
