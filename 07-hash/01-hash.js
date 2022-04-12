const hash1 = (key, arrayLength) => {
    let total = 0;
    for (let char of key) {
        let value = char.charCodeAt(0) - 96;
        total = (value + total) % arrayLength;
    }
    return total;
}

const hash = (key, arrayLength) => {
    let total = 0;
    let PRIME = 31;
    const len = Math.min(key.length, 100);
    for (let i = 0; i < len; i++) {
        let char = key[i];
        let value = char.charCodeAt(0) - 96;;
        total = (total + value) % arrayLength;
    }
    return total;
}