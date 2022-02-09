// https://leetcode.com/problems/queries-on-number-of-points-inside-a-circle/
// You are given an array points where points[i] = [xi, yi] is the coordinates of the ith point on a 2D plane. Multiple points can have the same coordinates.

// You are also given an array queries where queries[j] = [xj, yj, rj] describes a circle centered at (xj, yj) with a radius of rj.

// For each query queries[j], compute the number of points inside the jth circle. Points on the border of the circle are considered inside.

// Return an array answer, where answer[j] is the answer to the jth query.

// Input: points = [[1,3],[3,3],[5,3],[2,2]], queries = [[2,3,1],[4,3,1],[1,1,2]]
// Output: [3,2,2]
// Explanation: The points and circles are shown above.
// queries[0] is the green circle, queries[1] is the red circle, and queries[2] is the blue circle.

var countPoints = function (points, queries) {
    let answer = [];
    for (let i = 0; i < queries.length; i++) {
        let count = 0;
        for (let j = 0; j < points.length; j++) {
            let xPoint = points[j][0];
            let xQuery = queries[i][0];
            let yPoint = points[j][1];
            let yQuery = queries[i][1];
            // FORMULA: X^2 + Y^2 < R^
            // if (Math.pow((xPoint - xQuery), 2) + Math.pow((yPoint - yQuery), 2) <= Math.pow(queries[i][2], 2)) {
            if (Math.pow((xQuery - xPoint), 2) + Math.pow((yQuery - yPoint), 2) <= Math.pow(queries[i][2], 2)) {
                count++;
            }
        }
        answer.push(count);
    }
    return answer;
};
// const points = [[1, 3], [3, 3], [5, 3], [2, 2]];
// const queries = [[2, 3, 1], [4, 3, 1], [1, 1, 2]]
const points = [[99, 113], [150, 165], [23, 65], [175, 154], [84, 83], [24, 59], [124, 29], [19, 97], [117, 182], [105, 191], [83, 117], [114, 35], [0, 111], [22, 53]];
const queries = [[105, 191, 155], [114, 35, 94], [84, 83, 68], [175, 154, 28], [99, 113, 80], [175, 154, 177], [175, 154, 181], [114, 35, 134], [22, 53, 105], [124, 29, 164], [6, 99, 39], [84, 83, 35]];
const result = countPoints(points, queries);
console.log(result);