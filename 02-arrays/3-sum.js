// https://leetcode.com/problems/3sum/
// Given an integer array nums, return all the triplets[nums[i], nums[j], nums[k]] such that i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0.

// Notice that the solution set must not contain duplicate triplets.

//     Example 1:

// Input: nums = [-1, 0, 1, 2, -1, -4]
// Output: [[-1, -1, 2], [-1, 0, 1]]
// Example 2:

// Input: nums = []
// Output: []
// Example 3:

// Input: nums = [0]
// Output: []

var threeSum = function (nums) {
    const answer = []//new Set();
    for (let i = 0; i < nums.length; i++) {
        const iVal = nums[i];
        for (let j = i + 1; j < nums.length; j++) {
            const jVal = nums[j];
            for (let k = j + 1; k < nums.length; k++) {
                const kVal = nums[k];
                if (iVal + jVal + kVal === 0) {
                    const arr = [iVal, jVal, kVal];
                    answer.push(arr.sort());
                }
            }
        }
    }
    const set = new Set(answer);
    return [...set];
};

const nums = [-1, 0, 1, 2, -1, -4];
const result = threeSum(nums);
console.log(result);

