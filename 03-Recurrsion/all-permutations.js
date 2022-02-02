class Solution {
    permutate = (nums, permutations = [], answer = []) => {
        if (nums.length === 0) {
            answer.push([...permutations]);
        }
        for (let i = 0; i < nums.length; i++) {
            permutations.push(nums[i]);
            const choices = nums.filter((num, index) => index !== i);
            this.permutate(choices, permutations, answer);
            permutations.pop();
        }
        return answer;
    }
}
const solution = new Solution();
const result = solution.permutate(['a', 'b','c']);
console.log(result);