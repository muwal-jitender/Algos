class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class LinkedList {
    constructor(value) {
        this.head = {
            value: value,
            next: null
        }
        this.tail = this.head;
        this.length = 1;
    }

    // O(1)
    append(value) {
        const newNode = new Node(value);

        this.tail.next = newNode;
        this.tail = newNode;

        this.length++;
    }
    // O(1)
    prepend(value) {
        const newNode = new Node(value);

        newNode.next = this.head;
        this.head = newNode;
        this.length++;
    }
}

const myList = new LinkedList(10);
myList.append(5);
myList.append(16);
myList.prepend(1);
console.log(myList);