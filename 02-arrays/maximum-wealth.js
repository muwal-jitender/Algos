// You are given an m x n integer grid accounts where accounts[i][j] is the amount of money the i​​​​​​​​​​​th​​​​ customer has in the j​​​​​​​​​​​th​​​​ bank. Return the wealth that the richest customer has.

// A customer's wealth is the amount of money they have in all their bank accounts. The richest customer is the customer that has the maximum wealth.

// Example 1:

// Input: accounts = [[1,2,3],[3,2,1]]
// Output: 6
// Explanation:
// 1st customer has wealth = 1 + 2 + 3 = 6
// 2nd customer has wealth = 3 + 2 + 1 = 6
// Both customers are considered the richest with a wealth of 6 each, so return 6.


var maximumWealth1 = function (accounts) {
    if (Array.isArray(accounts)) {
        let maxSum = 0;
        for (let i = 0; i < accounts.length; i++) {
            const account = accounts[i];
            let sum = 0;
            for (let j = 0; j < account.length; j++) {
                const money = account[j];
                sum += money;
            }
            maxSum = sum > maxSum ? sum : maxSum;
        }
        return maxSum;
    }
};
var maximumWealth2 = function (accounts) {
    if (Array.isArray(accounts)) {
        let maxSum = 0;
        for (let i = 0; i < accounts.length; i++) {
            const account = accounts[i];
            if (Array.isArray(account)) {
                let sum = account.reduce((sum, value) => sum + value, 0)
                maxSum = sum > maxSum ? sum : maxSum;
            }
        }
        return maxSum;
    }
};
var maximumWealth = function (accounts) {
    if (Array.isArray(accounts)) {
        return Math.max(...accounts.map(account => account.reduce((sum, value) => sum + value, 0)));
    }
};
//const accounts = [[1, 2, 3], [3, 2, 1]];
// const accounts = [[1, 5, 4], [7, 3, 2], [3, 5, 7]];
// const result = maximumWealth(accounts);
// console.log(result);

var finalValueAfterOperations = function (operations) {
    if (Array.isArray(operations)) {
        let initial = 0;
        operations.forEach(value => {
            if (value.includes('+')) initial++;
            else
                initial--;
        });
        return initial;
    }
};

const operations = ["++X", "++X", "X++"];
let result = finalValueAfterOperations(operations);
console.log(result);