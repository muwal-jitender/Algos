// Without this memo O(2^n)
// With memo O(n) using Memoization
function fib(n, memo = []) {
    if (memo[n] !== undefined) return memo[n];
    if (n <= 2) return 1;
    var result = fib(n - 1, memo) + fib(n - 2, memo);
    memo[n] = result;
    return result;
}

// Tabulated Version
// Also a bottom-up approach
function fib1(n) {
    if (n <= 2) return 1;
    let fibNum = [0, 1, 1];
    for (let i = 3; i <= n; i++) {
        fibNum[i] = fibNum[i - 1] + fibNum[i - 2];
    }
    return fibNum[n]
}