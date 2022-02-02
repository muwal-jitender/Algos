class HashTable {
    constructor(size) {
        this.data = new Array(size);
    }

    // "_" means treat it like a private property. It is just a convention and not forced by JavaScript
    _hash(key) {
        let hash = 0;
        for (let i = 0; i < key.length; i++) {
            hash = (hash + key.charCodeAt(i) * i) % this.data.length;
        }
        return hash;
    }

    set(key, value) {
        let address = this._hash(key);
        if (!this.data[address]) {
            this.data[address] = [];
        }
        this.data[address].push([key, value]);
        console.log(this.data);
    }
    get(key) {
        let address = this._hash(key);
        const currentBucket = this.data[address];
        console.log(`Current Bucket ${currentBucket}`);
        console.log(`currentBucket.length ${currentBucket.length}`);
        if (currentBucket)
            for (let i = 0; i < currentBucket.length; i++) {
                if (currentBucket[i][0] === key) {
                    return currentBucket[i][1];
                }
            }
        return undefined;
    }
    keys() {
        const keysArray = [];
        for (let i = 0; i < this.data.length; i++) {
            if (this.data[i]) {
                keysArray.push(this.data[i][0][0]);
            }
        }
        return keysArray;
    }

}

const callHashTable = () => {
    const myHash = new HashTable(50);
    myHash.set('grapes', 10000);
    myHash.set('apple', 554);
    myHash.set('guava', 553);
    myHash.set('orange', 552);
    myHash.set('Papaya', 11000);
    console.log(`Value ${myHash.keys()}`);
}

module.exports = {
    callHashTable
}

