const mergeSort = (nums) => {
    if (Array.isArray(nums)) {
        if (nums.length < 2) {
            return nums;
        }

        const pivot = nums[Math.ceil(nums.length / 2)];
        const less = nums.filter(value => value < pivot);
        const grater = nums.filter(value => value > pivot);

        return [...mergeSort(less), pivot, ...mergeSort(grater)];
    }
}

//const result = mergeSort([7, 2, 1, 3, 5, 4, 9, 6, 8]);
const result = mergeSort([]);

console.log(result);