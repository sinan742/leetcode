/**
 * @param {number[]} nums
 * @return {number}
 */
var dominantIndex = function(nums) {
    let max =-0
    let secondmax =-0
    let maxindex =-1
   for(let i=0;i<nums.length;i++){
    if(nums[i]>max){
        secondmax = max

        max = nums[i]
        maxindex = i
    }else if(nums[i]>secondmax){
        secondmax = nums[i]
    }
    
   }
   return max >= 2*secondmax ? maxindex: -1
};