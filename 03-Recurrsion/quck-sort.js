const quickSort = nums => {
    if (Array.isArray(nums)) {
        if (nums.length < 2) {
            return nums;
        }
        if (nums.length === 2) {
            return nums[0] < nums[1] ? [nums[0], nums[1]] : [nums[1], nums[10]];
        }
        const pivot = Math.floor(nums.length / 2);

        return [quickSort(...nums.splice(0, pivot)), pivot, quickSort(...nums.splice(pivot + 1, (nums.length - pivot)))];

    }
}

const nums = [1, 3, 5, 9, 2];
const result = quickSort(nums);
console.log(result);