/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
  let copy = nums1.slice(0, m);
  let i = 0,
    j = 0,
    k = 0;
  while (i < m && j < n) {
    nums1[k++] = copy[i] < nums2[j] ? copy[i++] : nums2[j++];
  }
  while (i < m) {
    nums1[k++] = copy[i++];
  }
  while (j < n) {
    nums1[k++] = nums2[j++];
  }
};
