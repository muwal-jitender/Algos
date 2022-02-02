 // const flCapitalNames = arr.map(x => x.replace(/./, c => c.toUpperCase()));
// return flCapitalNames;

const capitalizeFirst = (arr) => {
    if (Array.isArray(arr)) {
        const flCapitalNames = [];
        const helper = (arr) => {
            if (arr.length === 0) {
                return;
            }
            const word = arr[0].replace(/./, c => c.toUpperCase());
            flCapitalNames.push(word);
            helper(arr.slice(1));
        }
        helper(arr);
        return flCapitalNames;
    }
    else {
        return [];
    }
}

let names = ['james', 'robert', 'mary']

console.log(capitalizeFirst(names));