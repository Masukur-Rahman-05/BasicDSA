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
      throw new Error("Valid Data Required");
    }

    const newNode = new Node(data);

    newNode.next = this.head;
    this.head = newNode;
    this.length++;

    if (this.length === 1) {
      this.tail = newNode;
    }

    return true;
  }

  append(data) {
    if (data === undefined || data === null) {
      throw new Error("Valid Data Required");
    }

    if (this.length === 0) {
      this.prepend(data);
      return true;
    }

    const newNode = new Node(data);

    this.tail.next = newNode;
    this.tail = newNode;
    this.length++;

    return true;
  }
}
