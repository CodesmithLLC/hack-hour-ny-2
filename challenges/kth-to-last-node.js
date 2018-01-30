/**
 * Write a function that takes two parameters, an integer and the head of a
 * singly linked list, and returns the VALUE on the kth to last node in the list.
 *
 * const a = new Node('A');
 * const b = new Node('B');
 * const c = new Node('C');
 * const d = new Node('D');
 * const e = new Node('E');
 *
 * a.next = b;
 * b.next = c;
 * c.next = d;
 * d.next = e;
 *
 * kthToLastNode(2, a); -> returns 'D' (the value on the second to last node)
 */

function Node(val) {
  this.value = val;
  this.next = null;

}

function kthToLastNode(k,head) {
  {
            //null check
            if (head == null || k < 1)
                return undefined;

            let i = 1;
            let val = head;
            while (head != null) {

                // not enough nodes
                if (head.next == null && i < k)
                    return -1;
                else
                {
                    if (i == k && head.next == null)
                    {
                        return val.value;
                    }
                    else {
                        if (i == k)
                            val = val.next;
                        else
                            i++;
                    }
                    head = head.next;

                }
            }

            return undefined;
        }
}

module.exports = {Node: Node, kthToLastNode: kthToLastNode};
