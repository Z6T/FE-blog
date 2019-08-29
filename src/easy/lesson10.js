
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
// 第一种方法
var searchInsert = function(nums, target) {
    nums.push(target);
    const arr = Array.from(new Set(nums));
    arr.sort((a,b)=>a-b)
    return arr.indexOf(target)
};

// 第二种方法
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    for(var i=0;i<nums.length;i++){
        const ele = nums[i];
        if(ele === target || target < ele){
            return i
        }else if(i===nums.length-1) {
            return nums.length
        }
    }
};