/*
Create a doubly linked list with an add and remove method
 */
// 3-30

function LinkedList() {
  this.head = null;
  this.tail = null;
}

function Node(val) {
  this.val = val;
  this.next = null;
  this.prev = null;
}

/*
Adds a node to the end of the list
 */
LinkedList.prototype.add = function(val) {
  if (!this.head) {
    this.head = new Node(val);
    this.tail = this.head;
    return;
  }
  const newTail = new Node(val);
  newTail.prev = this.tail;
  this.tail.next = newTail;
  this.tail = this.tail.next;
};

/*
Removes the first node with the inputted value
 */
LinkedList.prototype.remove = function(val) {
  if (!this.head) return;
  if (this.head === this.tail) {
    if (this.head.val === val) {
      this.head = null;
      this.tail = null;
    }
    return;
  }
  let currNode = this.head;
  if (currNode.val === val) {
    this.head = currNode.next;
    currNode.next.prev = null;
    return;
  }
  currNode = currNode.next;
  while (currNode) {
    if (currNode.val === val) {
      if (currNode === this.tail) {
        this.tail = currNode.prev;
        currNode.prev.next = null;
        return;
      }
      currNode.prev.next = currNode.next;
      currNode.next.prev = currNode.prev;
      return;
    }
    currNode = currNode.next;
  }
  return;
};

module.exports = LinkedList;
