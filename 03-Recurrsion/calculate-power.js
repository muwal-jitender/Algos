// a^b = a * a^b-1
const power = (a, b) => {
    if (b === 0) {
        return 1;
    }
    return a * power(a, b - 1);
}

// const result = power(3, 6);
// console.log(result);

// a^b= a^b/2 * a^b/2 If b is even
// a^b= a * a^b/2 * a^b/2 If b is odd

const powerImproved = (a, b) => {
    if (b === 0) return 1;
    if (b === 1) return a;
    let tmp = powerImproved(a, Math.floor(b / 2));
    if (b % 2 === 0) {
        return tmp * tmp;
    }
    else {
        return a * tmp * tmp;
    }
}

const result = powerImproved(3, 6);
console.log(result);