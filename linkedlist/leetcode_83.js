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
var deleteDuplicates = function (head) {
  let fakeHead = new ListNode();
  fakeHead.next = head;
  let cur = head,
    prev = fakeHead;
  while (cur) {
    while (cur.next && cur.val === cur.next.val) {
      cur = cur.next;
    }
    prev = prev.next = cur;
    cur = cur.next;
  }
  return fakeHead.next;
};
