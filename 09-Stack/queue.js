class Node {
    constructor(data) {
        this.value = data;
        this.next = null;
    }
}
class Queue {
    constructor() {
        this.first = null;
        this.last = null;
        this.size = 0;
    }
    enqueue(data) {
        var newNode = new Node(data);
        if (this.size === 0) {
            this.first = newNode;
            this.last = newNode;
        } else {
            this.last.next = newNode;
            this.last = newNode;
        }
        return ++this.size;
    }
    dequeue() {
        if (this.size > 0) {
            let head = this.first;
            this.first = head.next;
            head.next = null;
            this.size--;
            if (!this.first) {
                this.last = null;
            }
            return head;
        }
    }
}

var queue = new Queue();

for (i = 1; i <= 4; i++) {
    queue.enqueue(100 + i);
}
console.log(queue);