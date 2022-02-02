//Time complexity O(n)
// Space complexity O(n)
const fact = n => {
    if (n === 1) {
        return 1;
    }
    else {
        let subProblem = fact(n - 1);
        return n * subProblem;
    }
}
const result = fact(5);
console.log(result);

