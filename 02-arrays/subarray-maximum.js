// Given an integer array nums, find the contiguous subarray (containing at least one number) which has the largest sum and return its sum.

// A subarray is a contiguous part of an array.

// Example 1:

// Input: nums = [-2,1,-3,4,-1,2,1,-5,4]
// Output: 6
// Explanation: [4,-1,2,1] has the largest sum = 6.
// Example 2:

// Input: nums = [1]
// Output: 1
// Example 3:

// Input: nums = [5,4,-1,7,8]
// Output: 23

var maxSubArray1 = function (nums) {
    if (Array.isArray(nums)) {
        let largestSum = nums[0];
        let sum = nums[0];
        nums.forEach((val, i) => {

        });
    }
};
var maxSubArray = function (nums) {
    if (Array.isArray(nums)) {
        let sum = nums[0];
        let largestSum = nums[0];
        for (let i = 1; i < nums.length; i++) {
            sum = Math.max(nums[i], sum + nums[i]);
            largestSum = Math.max(largestSum, sum);
        }
        return largestSum;
    }
};

const nums = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
const result = maxSubArray(nums);
console.log(result);