/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function (l1, l2) {
  const newList = new ListNode();
  let node = newList,
    n1 = l1,
    n2 = l2;
  while (n1 && n2) {
    if (n1.val < n2.val) {
      node.next = n1;
      n1 = n1.next;
    } else {
      node.next = n2;
      n2 = n2.next;
    }
    node = node.next;
  }
  while (n1) {
    node = node.next = n1;
    n1 = n1.next;
  }
  while (n2) {
    node = node.next = n2;
    n2 = n2.next;
  }
  return newList.next;
};
