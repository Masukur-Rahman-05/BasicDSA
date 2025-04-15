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
    const newNode = new Node(data);

    newNode.next = this.head;
    this.head = newNode;
    this.length++;

    if (this.length === 1) {
      this.tail = newNode;
    }
  }

  insertBefore(target, data) {
    if (!this.head) {
      throw new Error("List is Empty");
    }

    let newNode = new Node(data);

    let current = this.head;

    if (this.head.data === target) {
      newNode.next = this.head;
      this.head = newNode;
      this.length++;
      return;
    }

    while (current.next !== null && current.next.data !== target) {
      current = current.next;
    }

    if (!current.next) {
      throw new Error("Target not found");
    }

    newNode.next = current.next;
    current.next = newNode;
    this.length++;
  }

  print() {
    let current = this.head;

    let result = "";
    while (current !== null) {
      result += `${current.data}` + `${current.next !== null ? " -> " : ""}`;
      current = current.next;
    }
    return result;
  }
}

const node = new LinkedList(10);

node.prepend(20);
node.prepend(30);
node.prepend(40);

console.log(node.print());

node.insertBefore(30, 25);
console.log(node.print());

node.insertBefore(40, 76);
console.log(node.print());
