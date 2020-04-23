/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraySum = function (nums, k) {
  let sum = Array(nums.length + 1),
    res = 0;
  sum[0] = 0;
  for (let i = 1; i <= nums.length; i++) {
    sum[i] = sum[i - 1] + nums[i - 1];
  }
  for (let i = 0; i <= nums.length; i++) {
    for (let j = i + 1; j <= nums.length; j++) {
      // sum(i,j) = sum[j] - sum[i]; i + 1 ~ j
      res += sum[j] - sum[i] === k ? 1 : 0;
    }
  }
  return res;
};

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraySum = function(nums, k) {
  const map = new Map();
  map.set(0, 1);
  let res = 0, sum = 0;
  for (let num of nums) {
    sum += num;
    if (map.has(sum - k)) {
      res += map.get(sum - k);
    }
    if (!map.has(sum)) {
      map.set(sum, 0);
    }
    map.set(sum, map.get(sum) + 1);
  }
  return res;
};