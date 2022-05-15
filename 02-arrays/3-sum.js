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

// Input: nums = [-1,0,1,0]
// Output: [ [ -1, 0, 1 ] ]

// Input: nums = [-1,0,1,2,-1,-4,-2,-3,3,0,4]
// Output: [[-4,0,4],[-4,1,3],[-3,-1,4],[-3,0,3],[-3,1,2],[-2,-1,3],[-2,0,2],[-1,-1,2],[-1,0,1]]
var threeSum = function (nums) {
  const answer = [];
  let target = 0;
  if (Array.isArray(nums)) {
    nums.sort((x, y) => x - y);
    for (let i = 0; i < nums.length; i++) {
      let a = nums[i];
      if (i > 0 && a === nums[i - 1]) continue;
      let left = i + 1;
      let right = nums.length - 1;
      while (left < right) {
        const sum = a + nums[left] + nums[right];
        if (sum > target) {
          right = right - 1;
        } else if (sum < target) {
          left = left + 1;
        } else {
          answer.push([a, nums[left], nums[right]]);
          left = left + 1;
          while (nums[left] === nums[left - 1] && left < right) {
            left = left + 1;
          }
        }
      }
    }
    return answer;
  }
};

//const nums = [-1, 0, 1, 2, -1, -4];
const nums = [-1, 0, 1, 2, -1, -4, -2, -3, 3, 0, 4];
const result = threeSum(nums);
console.log(result);
