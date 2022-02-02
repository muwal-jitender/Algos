// let words = ['i', 'am', 'learning', 'recursion'];
// capitalizedWords(words); // ['I', 'AM', 'LEARNING', 'RECURSION']

const capitalizedWords = (words) => {

    let item = [];
    if (words.length === 0) {
        return item;
    }
    item.push(words[0].toUpperCase());
    return item.concat(capitalizedWords(words.slice(1)));
}

let words = ['i', 'am', 'learning', 'recursion'];
const result = capitalizedWords(words); // ['I', 'AM', 'LEARNING', 'RECURSION']
console.log(result);