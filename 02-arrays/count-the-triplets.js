// Given an array of distinct integers. The task is to count all the triplets such that sum of two elements equals the third element.

// Example 1:

// Input:
// N = 4
// arr[] = {1, 5, 3, 2}
// Output: 2
// Explanation: There are 2 triplets:
// 1 + 2 = 3 and 3 +2 = 5

// Input:
// N = 3
// arr[] = {2, 3, 4}
// Output: 0
// Explanation: No such triplet exits

class Solution {

    countTriplet(arr, n) {
        var count = 0;
        if (arr.length < n)
            return count;
        var set = new Set(arr);

        for (let i = 0; i < arr.length - 1; i++) {
            const first = arr[i];
            for (let j = i + 1; j < arr.length; j++) {
                const second = arr[j];
                if (set.has(arr[i] + arr[j])) {
                    count++;
                }
            }
        }
        return count;
    }
}

const solution = new Solution();
const arr = [12, 8, 2, 11, 5, 14, 10];
//const arr = [1, 5, 3, 2, 4, 7];
//const arr = [2, 3, 4];
const n = 6;
const result = solution.countTriplet(arr, n);
console.log(JSON.stringify(result));