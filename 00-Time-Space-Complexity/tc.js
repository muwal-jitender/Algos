function addUpTo(n) {
    let sum = 0;
    for (let i = 0; i < n.length; i++) {
        sum += i;
    }
    return sum;
}
function addUpTo2(n) {
    return n * (n + 1) / 2;
}

let t1 = performance.now();
//addUpTo(99990000000);
let t2 = performance.now();
console.log(`Time Elasped: ${(t2 - t1) / 1000} seconds`);

function subtotals(n) {
    var value = 0;
    for (var i = 0; i < n; i++) {

        for (var j = 0; j < i; j++) {

            console.log('j ' + j);
            value += 1;
        }
    }
}

subtotals(6);