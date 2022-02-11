// https://leetcode.com/problems/container-with-most-water/
// You are given an integer array height of length n. There are n vertical lines drawn such that the two endpoints of the ith line are (i, 0) and (i, height[i]).

// Find two lines that together with the x-axis form a container, such that the container contains the most water.

// Return the maximum amount of water a container can store.

// Notice that you may not slant the container.



// Example 1:


// Input: height = [1,8,6,2,5,4,8,3,7]
// Output: 49
// Explanation: The above vertical lines are represented by array [1,8,6,2,5,4,8,3,7]. In this case, the max area of water (blue section) the container can contain is 49.

// brute force
const maxArea1 = function (height) {
    let answer = 0;
    if (Array.isArray(height)) {
        for (let i = 0; i < height.length; i++) {
            const left = height[i];
            for (let j = i + 1; j < height.length; j++) {
                const right = height[j];
                let short = Math.min(left, right);
                let distance = short * (j - i);
                answer = Math.max(answer, distance);
            }
        }
        return answer;
    }
};

const maxArea = function (height) {
    let answer = 0;
    if (Array.isArray(height)) {

        let start = 0;
        let end = height.length - 1;

        while (start != end) {
            let short = Math.min(height[start], height[end]);
            let distance = short * (end - start);
            answer = Math.max(answer, distance);
            if (height[start] < height[end]) {
                start++;
            }
            else {
                end--;
            }
        }
        return answer;
    }
};
const height = [1, 8, 6, 2, 5, 4, 8, 3, 7];

const result = maxArea(height);
console.log(result);