// https://leetcode.com/problems/same-tree/
// Given the roots of two binary trees p and q, write a function to check if they are the same or not. Two binary trees are considered the same if they are structurally identical, and the nodes have the same value.

// Example 1:
// Input: p = [1,2,3], q = [1,2,3]
// Output: true

// Example 2:
// Input: p = [1,2], q = [1,null,2]
// Output: false

// Example 3:
// Input: p = [1,2,1], q = [1,1,2]
// Output: false
var isSameTree = function (p, q) {
    if (Array.isArray(p) && Array.isArray(q)) {
        if (p.length === 0 && q.length === 0) return true;

        if (p.length === 0 || q.length === 0) return false;
        pVal = p.shift();
        qVal = q.shift();
        if (pVal !== qVal) return false;

        return isSameTree(p, q);
    }

};


// const p = [1, 2, 3];
// const q = [1, 2, 3];

const p = [1, 2, 3];
const q = [1, 2, 3];

console.log(isSameTree(p, q));
