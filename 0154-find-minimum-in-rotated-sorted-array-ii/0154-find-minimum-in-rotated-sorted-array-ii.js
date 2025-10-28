/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function(nums) {
   const a = nums.sort((a,b)=>a - b)
   return a[0]
};