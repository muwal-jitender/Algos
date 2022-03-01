
const mergeSort = (nums, left, right) => {
    if (Array.isArray(nums)) {
        if (left < right) {
            const mid = Math.floor((left + right) / 2);
            mergeSort(nums, left, mid);
            mergeSort(nums, mid + 1, right);
            merge(nums, left, right, mid);
        }
    }
}

const merge = (nums, left, right, mid) => {
    let i = left;
    let k = left;
    let j = mid + 1;
    let temp = [];
    while (i <= mid && j <= right) {
        if (nums[i] > nums[j]) {
            temp[k] = nums[j];
            j++; k++;
        }
        else {
            temp[k] = nums[i];
            i++; k++;
        }
    }
    while (i <= mid) {
        temp[k] = nums[i];
        i++;
    }
    while (j < right) {
        temp[k] = nums[j];
        j++;
    }
    temp.forEach((value, index) => {
        nums[index] = value;
    });
}
//const nums = [4, 1, 5, 3];
const nums = [4, 1, 5, 3, 7, 2, 0, 6];
//const nums = [];

mergeSort(nums, 0, nums.length - 1);

console.log(nums);

const nums1 = [4, 1, 5, 3, 7, 2, 0, 6];
const quickSort = nums => {
    if (nums.length < 2) return nums;
    const left = 0;
    const right = nums.length - 1;
    const pivot = nums[Math.floor((left + right) / 2)];
    const minNums = nums.filter((value, index) => value < pivot);
    const maxNums = nums.filter((value, index) => value > pivot);

    return [...quickSort(minNums), pivot, ...quickSort(maxNums)];

}

const result = quickSort(nums1)
console.log('Quick Sort');
console.log(result);