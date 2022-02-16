var twoSum = function (numbers, target) {
    if (Array.isArray(numbers)) {
        if (numbers.length < 2) return [];
        let left = 0;
        let right = numbers.length - 1;
        while (left < right) {
            let total = numbers[left] + numbers[right];
            if (total > target) right -= 1;
            else if (total < target) left += 1;
            else return [left + 1, right + 1];
        }
        return [];
    }
};

const numbers = [2, 7, 11, 15], target = 9;
const result = twoSum(numbers, target);
console.log(result);
