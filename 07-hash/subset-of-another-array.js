// https://www.geeksforgeeks.org/find-whether-an-array-is-subset-of-another-array-set-1/

// Given two arrays: arr1[0..m-1] and arr2[0..n-1]. Find whether arr2[] is a subset of arr1[] or not. Both the arrays are not in sorted order. 
// It may be assumed that elements in both array are distinct.

// Input: arr1[] = { 11, 1, 13, 21, 3, 7}, arr2[] = { 11, 3, 7, 1}
// Output: arr2[] is a subset of arr1[]

// Input: arr1[] = { 1, 2, 3, 4, 5, 6}, arr2[] = { 1, 2, 4}
// Output: arr2[] is a subset of arr1[]

// Input: arr1[] = { 10, 5, 2, 23, 19}, arr2[] = { 19, 5, 3}
// Output: arr2[] is not a subset of arr1[]

const isSubset = (list1, list2) => {
    let j = 0;
    for (let i = 0; i < list2.length; i++) {

        for (j = 0; j < list1.length; j++) {
            if (list2[i] === list1[j]) {
                break;
            }
        }
        if (j === list1.length) {
            return false;
        }
    }
    return true;
} // O(n*m)

const isSubset2 = (list1, list2) => {
    const map = new Set();
    for (let i = 0; i < list1.length; i++) {
        map.add(list1[i])
    }
    let i = 0;
    for (i = 0; i < list2.length; i++) {
        if (map.has(list2[i]) === false) {
            return false;
        }
    }

    return true;

} // O(n+m) Space: O(n)

const isSubset3 = (list1, list2) => {
    let frequency = new Array(list1);
    console.log(frequency);

    for (let i = 0; i < list1.length; i++) {
        frequency[list1[i]]++;
    }
}

function isSubset4(arr1, m, arr2, n) {
    // Create a Frequency Table using STL
    let frequency = new Array(...arr1);

    // Increase the frequency of each element
    // in the frequency table.
    for (let i = 0; i < m; i++) {
        frequency[arr1[i]]++;
    }
    // Decrease the frequency if the
    // element was found in the frequency
    // table with the frequency more than 0.
    // else return 0 and if loop is
    // completed return 1.
    for (let i = 0; i < n; i++) {
        if (frequency[arr2[i]] > 0)
            frequency[arr2[i]]--;
        else {
            return false;
        }
    }
    return true;
}

const callIsSubsetArray = () => {

    arr1 = [1, 2, 3, 4, 5, 6];
    arr2 = [11, 3, 7, 1];
    arr3 = [1, 5, 0];
    arr4 = [1, 2, 4];
    console.log(`isSubsetArray\n ${isSubset4(arr1, arr1.length, arr3, arr3.length)}`);
}

module.exports = {
    callIsSubsetArray
}