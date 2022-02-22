
const biggestPlot = (w, h) => {
    if (w % h === 0) {
        return h;
    }

    const remainder = w % h;
    return biggestPlot(h, remainder);
}

const result = biggestPlot(100, 33);
console.log(result);