const fibo = n => {
    if (n === 0 || n === 1)
        return n;
    return fibo(n - 1) + fibo(n - 2);
}

// const result = fibo(7);
// console.log(result);

// Solve a problem, There are n person who want to go to the party.
// There is a constraint that any person can either go alone or can go in a pair.

const noOfPairs = n => {
    if (n <= 2)
        return n;
    return noOfPairs(n - 1) + ((n - 1) * (noOfPairs(n - 2)));
}

const result = noOfPairs(4);
console.log(result);
