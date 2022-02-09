// Given an array of integers nums sorted in non-decreasing order, find the starting and ending position of a given target value.

// If target is not found in the array, return [-1, -1].

// You must write an algorithm with O(log n) runtime complexity.



// Example 1:

// Input: nums = [5,7,7,8,8,10], target = 8
// Output: [3,4]
// Example 2:

// Input: nums = [5,7,7,8,9,10], target = 6
// Output: [3,3]

// Input: nums = [5,7,7,8,8,10], target = 6
// Output: [-1,-1]

var searchRange = function (nums, target) {
    if (Array.isArray(nums)) {
        let answer = [-1, -1];
        if (nums.length === 0 || target < nums[0]) return answer;
        for (let i = 0; i < nums.length; i++) {
            if (nums[i] === target) {
                if (answer[0] === -1) {
                    answer[0] = i;
                    answer[1] = i
                }
                else {
                    answer[1] = i;
                }
            }
        }
        return answer;
    }
};

let nums = [5, 7, 7, 8, 8, 8, 8];
//let nums = [];
let target = 8;
const result = searchRange(nums, target);
console.log(result);