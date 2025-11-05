/**
 * @param {number[]} nums
 * @param {Function} fn
 * @param {number} init
 * @return {number}
 */
var reduce = function(nums, fn, init) {

  let ac = init;
  for (let i = 0; i < nums.length; i++) {
    ac = fn(ac, nums[i]);
  }
  return ac;
};