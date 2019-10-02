/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */

const swap = (prev, curr) => {
  const temp = prev.val;
  prev.val = curr.val;
  curr.val = temp;
};

const sortList = function(head) {
  if (head == null) return head;

  let prev = null;
  let curr = head;
  let currup = head;
  let swapped;

  while (currup) {
    do {
      swapped = false;

      while (curr) {
        if (prev && prev.val > curr.val) {
          //swap
          swap(prev, curr);
          swapped = true;
        }
        prev = curr;
        curr = curr.next;
      }
    } while (swapped);

    swapped = true;
    curr = head;
    prev = null;
    currup = currup.next;
  }
  return head;
};
