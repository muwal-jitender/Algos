let states_needed = new Set(['mt', 'wa', 'or', 'id', 'nv', 'ut']);

let stations = new Map();
stations.set('kone', new Set(['id', 'nv', 'ut']));
stations.set('ktwo', new Set(['wa', 'id', 'mt']));
stations.set('kthree', new Set(['or', 'nv', 'ca']));
stations.set('kfour', new Set(['nv', 'ut']));
stations.set('kfive', new Set(['ca', 'az']));


let approximationAlgo = () => {
    let result = new Set();
    while (states_needed.size) {
        let bestStation;
        let statesCoverd = new Set();
        for (let [station, statesUnder] of stations) {
            let covered = intersection(states_needed, statesUnder);
            if (covered.size > statesCoverd.size) {
                bestStation = station;
                covered.forEach(x => statesCoverd.add(x));

            }
        }

        statesCoverd.forEach(element => {
            states_needed.delete(element)
        });
        result.add(bestStation);
    }
    return result;

}

const union = (set1, set2) => {
    return new Set([...set1, ...set2]);
}
const intersection = (set1, set2) => {
    return new Set([...set1].filter(x => set2.has(x)))
}
const difference = (set1, set2) => {
    return new Set([...set1].filter(x => !set2.has(x)));
}
const result = approximationAlgo();
console.log(result);
// console.log(union(stations.get('kone'), stations.get('ktwo')));
// console.log(intersection(stations.get('kone'), stations.get('ktwo')));
// console.log(difference(stations.get('kone'), stations.get('ktwo')));
