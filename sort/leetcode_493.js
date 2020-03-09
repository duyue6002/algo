/**
 * @param {number[]} nums
 * @return {number}
 */
var reversePairs = function(nums) {
  if (!nums || nums.length === 0) return 0;
  return mergeSort(nums, 0, nums.length - 1);
};

var mergeSort = function(nums, begin, end) {
  if (begin >= end) return 0;
  let mid = (begin + end) >> 1;
  let count = mergeSort(nums, begin, mid) + mergeSort(nums, mid + 1, end);
  let cache = Array(end - begin + 1);
  let t = begin,
    i = begin,
    k = 0;
  for (let j = mid + 1; j <= end; j++, k++) {
    while (t <= mid && nums[t] <= 2 * nums[j]) t++;
    while (i <= mid && nums[i] < nums[j]) cache[k++] = nums[i++];
    cache[k] = nums[j];
    count += mid - t + 1;
  }
  while (i <= mid) {
    cache[k++] = nums[i++];
  }
  for (let p = 0; p < cache.length; p++) {
    nums[begin + p] = cache[p];
  }
  return count;
};

let arr = Array.from(Array(10), () => Math.floor(Math.random() * 20));
let res = reversePairs(arr);
console.log(res);