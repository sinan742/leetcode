/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
    let n = nums.length;
    let expectedsum = (n*(n+1)) / 2;
    let actualsum = nums.reduce((a,b)=>a+b,0)
    return expectedsum - actualsum
};