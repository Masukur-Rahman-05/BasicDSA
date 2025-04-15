class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  prepend(data) {
    if (data === undefined || data === null) {
      throw new Error("Data cannot be undefined or null");
    }
    const newNode = new Node(data);

    newNode.next = this.head;
    this.head = newNode;
    this.length++;

    if (this.tail === null) {
      this.tail = newNode;
    }
  }

  insertAtPosition(position, data) {
    if (position < 1 || position > this.length + 1) {
      throw new Error("Invalid position");
    }

    if (data === undefined || data === null) {
      throw new Error("Data cannot be undefined or null");
    }

    if (position === 1) {
      this.prepend(data);
      return true;
    }

    let newNode = new Node(data);
    let current = this.head;
    let prev = null;
    let currentPosition = 1;

    while (current.next !== null && currentPosition < position) {
      prev = current;
      current = current.next;
      currentPosition++;
    }

    newNode.next = current;
    prev.next = newNode;
    this.length++;

    if (newNode.next === null) {
      this.tail = newNode;
    }
  }
}
