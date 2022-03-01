const quickSort = (nums) => {
    if (Array.isArray(nums)) {
        if (nums.length < 2) {
            return nums;
        }

        const pivot = nums[Math.ceil(nums.length / 2)];
        const less = nums.filter(value => value < pivot);
        const grater = nums.filter(value => value > pivot);

        return [...quickSort(less), pivot, ...quickSort(grater)];
    }
}

//const result = mergeSort([7, 2, 1, 3, 5, 4, 9, 6, 8]);
const result = quickSort([]);

console.log(result);