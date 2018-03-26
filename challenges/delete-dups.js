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
  const obj = {};
  let current = head;
  obj[current.value] = true;
  while (current.next) {
    if (obj[current.next.value]) {
      if (current.next.next) current.next = current.next.next;
      else current.next = null;
    }
    else obj[current.next.value] = true;
    current = current.next;
  }
  return head;
}

module.exports = deleteDups;
