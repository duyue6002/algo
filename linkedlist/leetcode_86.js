/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} x
 * @return {ListNode}
 */
var partition = function (head, x) {
  let lessList = new ListNode(),
    moreList = new ListNode();
  let less = lessList,
    more = moreList,
    node = head;
  while (node) {
    if (node.val < x) {
      less = less.next = node;
    } else {
      more = more.next = node;
    }
    node = node.next;
  }
  less.next = moreList.next;
  more.next = null;
  return lessList.next;
};
