// A Heap is a special Tree-based data structure in which the tree is a complete binary tree. Generally, Heaps can be of two types:

// Max-Heap: In a Max-Heap the key present at the root node must be greatest among the keys present at all of it’s children. The same property must be recursively true for all sub-trees in that Binary Tree.
// Min-Heap: In a Min-Heap the key present at the root node must be minimum among the keys present at all of it’s children. The same property must be recursively true for all sub-trees in that Binary Tree.
class MaxBinaryHeap {
    constructor() {
        this.items = [];
    }
    insert(value) {
        this.items.push(value);
        this.bubbleUp();
    }
    bubbleUp() {
        let idx = this.items.length - 1;
        const element = this.items[idx];
        while (idx > 0) {
            let parentIdx = Math.floor((idx - 1) / 2);
            let parent = this.items[parentIdx];
            if (element <= parent) break;
            this.items[parentIdx] = element;
            this.items[idx] = parent;
            idx = parentIdx;
        }
    }
    remove() {
        let idx = this.items.length - 1;
        this.swap(0, idx);
        const root = this.items.pop();
        this.bubbleDown();
        return root;

    }
    bubbleDown() {
        let idx = 0;
        const length = this.items.length;
        const element = this.items[0];
        while (true) {
            let leftIdx = 2 * idx + 1
            let rightIdx = 2 * idx + 2;
            if (leftIdx >= length || rightIdx >= length) break;

            const bothLarge = this.items[leftIdx] > element && this.items[rightIdx] > element;
            if (bothLarge) {
                if (this.items[leftIdx] > this.items[rightIdx]) {
                    this.swap(idx, leftIdx);
                    idx = leftIdx;
                }
                else {
                    this.swap(idx, rightIdx);
                    idx = rightIdx;
                }
            }
            else {
                if (this.items[leftIdx] > element) {
                    this.swap(idx, leftIdx);
                    idx = leftIdx;
                }
                else {
                    this.swap(idx, rightIdx);
                    idx = rightIdx;
                }
            }
        }
    }
    swap(idx, index) {
        [this.items[idx], this.items[index]] = [this.items[index], this.items[idx]];
    }
}

var maxBinaryHeap = new MaxBinaryHeap();
let arr = [2, 7, 26, 25, 19, 17, 1, 90, 3, 36];
for (i = 0; i < arr.length; i++) {
    maxBinaryHeap.insert(arr[i]);
}
// maxBinaryHeap.remove();
// maxBinaryHeap.remove();
console.log(maxBinaryHeap.values);