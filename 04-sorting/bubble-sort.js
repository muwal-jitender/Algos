// https://visualgo.net/en/sorting
// O(n^2)
const bubbleSort = nums => {
    let swapped = false;
    let n = nums.length - 1;
    do {
        let noSwap = true;
        for (let i = 0; i < n; i++) {
            let j = i + 1;
            if (nums[i] > nums[j]) {
                [nums[i], nums[j]] = [nums[j], nums[i]];
                noSwap = false;
            }
            console.log(nums, nums[i], nums[j]);
        }
        console.log(`One pass completed`);
        n -= 1;
        if (n <= -1 || !noSwap) {
            swapped = true;
        }
    }
    while (!swapped)
}

//const nums = [5, 1, 31, 3, 20, 36, 13, 11, 85, 10, 6, 7];
//const nums = [5, 1, 31, -14, 3, 20];
const nums = [1, -14, 3, 5, 20, 31];

bubbleSort(nums)
//console.log(nums);