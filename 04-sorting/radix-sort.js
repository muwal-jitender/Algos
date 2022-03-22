const getDigit = (num, i) => {
    let val = Math.floor(Math.abs(num) / Math.pow(10, i));
    return val % 10;
}



const getDigitCount = num => num === 0 ? 1 : Math.floor(Math.log10(Math.abs(num))) + 1;
const countMaxDigit = nums => {
    if (Array.isArray(nums)) {
        let maxCount = 0;
        for (const num of nums) {
            const digitCount = getDigitCount(num);
            maxCount = Math.max(digitCount, maxCount);
        }
        return maxCount;
    }
}

const radixSort = nums => {
    if (Array.isArray(nums)) {
        let n = countMaxDigit(nums);

        for (let i = 0; i < n; i++) {
            let stacks = Array.from({ length: 10 }, () => []);
            for (j = 0; j < nums.length; j++) {
                let digit = getDigit(nums[j], i);
                stacks[digit].push(nums[j]);
            }
            nums = [].concat(...stacks);
            console.log(nums);

        }
        return nums;

    }
}

const nums = [3221, 1, 10, 9680, 577, 9420, 7, 5622, 4793, 2030, 3138, 82, 2599, 743, 4127];
//const result = radixSort(nums);
//console.log(result);

let arr = [
    [10, 9680, 9420, 2030],
    [3221, 1],
    [5622, 82],
    [4793, 743],
    [],
    [],
    [],
    [577, 7, 4127],
    [3138],
    [2599]
];

arr = [].concat(...arr);
console.log(arr);
