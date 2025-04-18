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

  removeFront() {
    if (this.length === 0) {
      throw new Error("List is Empty");
    }

    this.head = this.head.next;
    this.length--;

    return true;
  }

  print() {
    let current = this.head;
    let result = "";
    while (current) {
      result += `${current.data}` + `${current.next !== null ? " -> " : ""}`;
      current = current.next;
    }
    return result;
  }
}

const node = new LinkedList();

node.prepend(10);
node.prepend(20);
node.prepend(30);
node.prepend(40);

console.log(node.print());

node.removeFront();
console.log(node.print());
