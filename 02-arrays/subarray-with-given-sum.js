// Given an unsorted array A of size N that contains only non-negative integers,
// find a continuous sub-array which adds to a given number S.

// Example 1:

// Input:
// N = 5, S = 12
// A[] = {1,2,3,7,5}

// Output: 2 4
// Explanation: The sum of elements from 2nd position to 4th position is 12.

class Solution {
    //Function to find a continuous sub-array which adds up to a given number.
    subarraySum(arr, n, s) {
        if (arr.length < n)
            return [-1];
        var total = 0;
        var start = 0;
        for (let index = 0; index < arr.length; index++) {
            const element = arr[index];
            total += element;
            while (total > s) {
                total -= arr[start];
                start++;
            }
            if (total == s) {
                return [start + 1, index + 1];
            }
        }
        return [-1];
    }
}
const solution = new Solution();
const arr = [1, 2, 3, 7, 5];
const n = 5;
const s = 12;
const result = solution.subarraySum(arr, n, s);
console.log(JSON.stringify(result));