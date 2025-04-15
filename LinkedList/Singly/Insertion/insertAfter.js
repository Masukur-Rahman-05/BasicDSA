//Add Node after a specific node of the Linked list

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

  insertAfter(prevData, data) {
    let current = this.head;
    while (current !== null) {
      if (current.data === prevData) {
        let newNode = new Node(data);

        newNode.next = current.next;
        current.next = newNode;

        if (current == this.tail) {
          this.tail = newNode;
        }
      }

      current = current.next;
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
list.prepend(20);
list.prepend(44);
list.prepend(35);
console.log("Primary List:", list.print());

list.insertAfter(20, 25);
console.log(list.print());
