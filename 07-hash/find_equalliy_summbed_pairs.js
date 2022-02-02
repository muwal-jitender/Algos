// Given an array of distinct integers, find if there are two pairs (a, b) and (c, d) such that a+b = c+d,
// and a, b, c and d are distinct elements. If there are multiple answers, then print any of them.
// Example:


// Input:   {3, 4, 7, 1, 2, 9, 8}
// Output:  (3, 8) and (4, 7)
// Explanation: 3+8 = 4+7

// Input:   {3, 4, 7, 1, 12, 9};
// Output:  (4, 12) and (7, 9)
// Explanation: 4+12 = 7+9

// Input:  {65, 30, 7, 90, 1, 9, 8};
// Output:  No pairs found
// Expected Time Complexity: O(n2)

const findPairs = () => {
    const arr = [3, 3, 7, 1, 2, 9, 8]
    const map = new Map();
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            const sum = arr[i] + arr[j];
            if (!map.has(sum)) {
                map.set(sum, [i, j])
            }
            else {
                const previousPair = map.get(sum);
                console.log(`(${arr[previousPair[0]]}, ${arr[previousPair[1]]}) and (${arr[i]}, ${arr[j]})`);
                return true;
            }
        }
    }
    console.log('No pairs found');
    return false;
}

module.exports={
    findPairs
}