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
var middleNode = function (head) {
  let slow = head,
    fast = head;
  while (fast) {
    if (!fast.next) return slow;
    if (!fast.next.next) return slow.next;
    slow = slow.next;
    fast = fast.next.next;
  }
  return null;
};
