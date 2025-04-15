//Add Node at the beginning of the Linked list

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

    if (this.tail === null) {
      this.tail = newNode;
    }
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

const list = new LinkedList();

list.prepend(10);
console.log(list.print());
list.prepend(20);
console.log(list.print());
list.prepend(44);
console.log(list.print());
list.prepend(35);
console.log(list.print());
