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
 
  let current = head;
  let prev = null;
  if (!current || !current.next) return current;
  let arr = [current.value];
  while(current.next) {
    if (!arr.includes(current.value)) {
      arr.push(current.value);
      prev = current;
      current = current.next;
    } else {
      prev = current.next
    }
  }
  return current;
}


module.exports = deleteDups;
