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
function LL(value){
  this.value = value;
  this.next = null;
}


function deleteDups(head) {
  const record = {};
  let current = head;
  let next = (current) ? current.next: null;

  while(next){
    if(record[next.value]){
      current.next = current.next.next;
    }
    else {
      record[next.value] = true;
    }

    current = current.next;
    next = (current) ? current.next: null;
  }

  return head;
}

// const current = new LL(1);
// current.next = new LL(2);
// current.next.next = new LL(3);
// current.next.next.next = new LL(3);
// current.next.next.next.next = new LL(4);

// deleteDups(current);

// console.log(JSON.stringify(current, null, 4));

module.exports = deleteDups;
