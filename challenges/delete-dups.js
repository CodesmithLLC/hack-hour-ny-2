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
  // an object to hold values we've seen
  const valuesSeen = {};
  valuesSeen[head.value] = true;

  for (let curr = head; curr.next; ) {
    // if we've seen value before, unlink next node
    // otherwise add new value to valuesSeen 
    if (valuesSeen[curr.next.value]) {
      curr.next = curr.next.next;
    } else {
      valuesSeen[curr.next.value] = true;
      curr = curr.next;
    }
  }
  return head;
}

function deleteDups2(head) {
  let outerNode = head;
  let innerNode;

  while (outerNode && outerNode.next) {
    innerNode = outerNode;

    while (innerNode.next) {
      if (outerNode.value === innerNode.next.value) {
        innerNode.next = innerNode.next.next;
      } else {
        innerNode = innerNode.next;
      }
    }
    outerNode = outerNode.next;
  }
}

module.exports = deleteDups;
