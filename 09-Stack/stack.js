class Node {
    constructor(data) {
        this.value = data;
        this.next = null;
    }
}
class Stack {
    constructor() {
        this.first = null;
        this.last = null;
        this.size = 0;
    }
    push(data) {
        var newNode = new Node(data);
        if (this.size === 0) {
            this.first = newNode;
            this.last = newNode;
        } else {
            var temp = this.first;
            this.first = newNode;
            this.first.next = temp;
        }
        return ++this.size;
    }
    pop() {
        if (this.size > 0) {
            let head = this.first;
            this.first = head.next;
            head.next = null;
            this.size--;
            if (!this.first) {
                this.last = null;
            }
            return head.value;
        }
    }
}

var stack = new Stack();

for (i = 1; i <= 4; i++) {
    stack.push(100 + i);
}
console.log(stack.size);