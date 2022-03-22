
const insertionSort = nums => {
    if (Array.isArray(nums)) {
        for (let i = 1; i < nums.length; i++) {
            let current = nums[i];
            let j = i - 1;
            for (; j >= 0 && nums[j] > current; j--) {
                nums[j + 1] = nums[j];
                console.log(`Swapping ${nums[j]} to ${nums[j + 1]}`);
            }
            console.log(`And placing the current value ${current} to ${nums[j + 1]}`);
            nums[j + 1] = current;
        }
    }
}
let nums = [2, 1, 9, 76, 4];
//const nums = [5, 2, 40, 0, 25, -7, 1];
//const nums = [5];
insertionSort(nums);
console.log(nums);