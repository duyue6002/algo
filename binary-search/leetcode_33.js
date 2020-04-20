/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
  let left = 0,
    right = nums.length - 1;
  while (left < right) {
    let mid = (right + left) >>> 1;
    //     [0, mid] go up
    if (nums[mid] >= nums[0] && (target > nums[mid] || target < nums[0])) {
      left = mid + 1;
    } else if (target > nums[mid] && target < nums[0]) {
      left = mid + 1;
    } else {
      right = mid;
    }
  }
  return left === right && nums[left] === target ? left : -1;
};

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
  let left = 0, right = nums.length - 1;
  while (left < right) {
    if (nums[left] < nums[right]) break;
    let mid = (left + right) >> 1;
    if (nums[mid] >= nums[left]) {
      left = mid + 1;
    } else {
      right = mid;
    }
  }
  const minIndex = left;
  left = 0;
  right = nums.length - 1;
  while (left <= right) {
    let mid = (left + right) >> 1;
    let realmid = (minIndex + mid) % nums.length;
    if (target === nums[realmid]) return realmid;
    else if (target > nums[realmid]) left = mid + 1;
    else right = mid - 1;
  }
  return -1;
};