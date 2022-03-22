// https://visualgo.net/en/sorting
// O(n^2)
const bubbleSort = nums => {
    let swapped = false;
    let n = nums.length;
    do {
        //let isSwapped = false;
        for (let i = 0; i < n; i++) {
            if (nums[i + 1] !== undefined && (nums[i] > nums[i + 1])) {
                [nums[i], nums[i + 1]] = [nums[i + 1], nums[i]];
                //  isSwapped = true;
            }
            // else {
            //     isSwapped = false;
            // }
        }
        n = n - 1;
        //if (n < 0 || !isSwapped) {
        if (n < 0) {
            swapped = true;
        }
    } while (!swapped);

}

const nums = [5, 1, 31, 3, 20, 36, 13, 11, 85, 10, 6, 7];
//const nums = [5, 1, 31, -14, 3, 20];
//const nums = [1, 3, 2, 0, 1];


bubbleSort(nums)
console.log('The final output');
console.log(nums);