// Given an array nums. We define a running sum of an array as runningSum[i] = sum(nums[0]…nums[i]).

// Return the running sum of nums.

// Example 1:

// Input: nums = [1,2,3,4]
// Output: [1,3,6,10]
// Explanation: Running sum is obtained as follows: [1, 1+2, 1+2+3, 1+2+3+4].

const runningSum = nums => {
    let sum = 0;
    let sumNums = [];
    for (let i = 0; i < nums.length; i++) {
        const element = nums[i];
        sum += element;
        sumNums.push(sum);
    }
    return sumNums;
};

const runningSum1 = nums => {
    for (let i = 0; i < nums.length; i++) {
        nums[i] = nums[i - 1] === undefined ? nums[i] : nums[i - 1] + nums[i];
    }
    return nums;
};
const nums = [1, 2, 3, 4];
const result = runningSum1(nums);
console.log(result);