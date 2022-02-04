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

function factorial(num) {
    if (num < 0) return undefined;
    if (num == 0) return 1;
    let x = num - 1;
    while (x > 1) {
      num *= x;
      x--;
    }
    return num;
  }