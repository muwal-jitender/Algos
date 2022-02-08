// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

// You may assume that each input would have exactly one solution, and you may not use the same element twice.

// You can return the answer in any order.

// Example 1:

// Input: nums = [2,7,11,15], target = 9
// Output: [0,1]
// Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
// Example 2:

// Input: nums = [3,2,4], target = 6
// Output: [1,2]

// Follow-up: Can you come up with an algorithm that is less than O(n2) time complexity?

// O(n2)
var twoSumWithBadCase = function (nums, target) {
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[i] + nums[j] === target) return [i, j];
        }
        return [-1];
    }
};

var twoSum = function (nums, target) {
    var set = new Set();

    for (let i = 0; i < nums.length; i++) {
        const remaining = target - nums[i];
        if (set.has(remaining)) {
            return [i, nums.indexOf(remaining)];
        } else {
            set.add(nums[i]);
        }
    }
    return [];
};

function twoSum1(nums, target) {
    let seen = {}
    for (i = 0; i < nums.length; i++) {
        let value = nums[i];
        remaining = target - value;

        if (remaining in seen) {
            return [seen[remaining], i];
        }

        seen[value] = i
    }
    return [];
}

// nums = [3, 1, 2, 4], target = 7;
// const result = twoSum1(nums, target);
// console.log(result);

var getConcatenation = function (nums) {
    let n = nums.length;
    let ans = new Array(2 * n);
    for (i = 0; i < n; i++) {
        ans[i] = nums[i];
        ans[i + n] = nums[i];
    }
    return ans;
};

let nums = [1, 2, 1]
// Output: [1,2,1,1,2,1]

const result = getConcatenation(nums);
console.log(result);