/*Input :
arr[] = { 3, 5, 2, 4, 9, 3, 1, 7, 3, 11, 12, 3}
x = 3
k = 3
Output : Yes
There are 4 non-overlapping segments of size k in the array, {3, 5, 2}, {4, 9, 3}, {1, 7, 3} and {11, 12, 3}. 3 is present all segments.
Input :
arr[] = { 21, 23, 56, 65, 34, 54, 76, 32, 23, 45, 21, 23, 25}
x = 23
k = 5
Output :Yes
There are three segments and last segment is not full {21, 23, 56, 65, 34}, {54, 76, 32, 23, 45} and {21, 23, 25}.
23 is present all window.
Input :arr[] = { 5, 8, 7, 12, 14, 3, 9}
x = 8
k = 2
Output : No*/

const findElementInEverySegment = () => {
    const x = 3;
    let k = 3
    arr = [3];

    let currentSegmentNumber = 1;
    let currentSegmentIndex = 1;
    for (let i = 0; i < arr.length; i++) {

        if (arr[i] === x) {
            i = k * currentSegmentNumber - 1;

            let remainingElements = arr.length - (i + 1);
            k = remainingElements >= k ? k : remainingElements;

            currentSegmentNumber++;
            currentSegmentIndex = 1;
            continue;
        }

        if (currentSegmentIndex === k || k >= arr.length && arr[i] !== x) {
            console.log(`Element is not in segment ${currentSegmentNumber}`);
            return false;
        }
        currentSegmentIndex++
    }
    console.log(`Element is in segment ${currentSegmentNumber}`);
    return true;
}

module.exports = {
    findElementInEverySegment
}