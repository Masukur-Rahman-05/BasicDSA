/*
Given a Singly linked list. The task is to modify the value of the first half of nodes such that 1st node’s new value is equal to the value of the last node minus the first node’s current value, 2nd node’s new value is equal to the second last node’s value minus 2nd nodes current value, likewise for first half nodes, then replace the second half of nodes with the initial values of the first half of nodes (values before modifying the nodes).

Note: If the size of it is odd then the value of the middle node remains unchanged.

Examples:

    Input: head: 10 -> 4 -> 5 -> 3 -> 6
    Output: -4 -> -1 -> 5 -> 4 -> 10

    Explanation: After modifying first half, list will be: -4 -> -1 -> 5 -> 3 -> 6
    After modifying Second half also, list will be: -4 -> -1 -> 5 -> 4 -> 10

    Input: head: 2 -> 9 -> 8 -> 12 -> 7 -> 10
    Output: 8 -> -2 -> 4 -> 8 -> 9 -> 2
    Explanation: After modifying the linked list as required, we have a new linked list containing the elements as 8 -> -2 -> 4 -> 8 -> 9 -> 2.

*/

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

  modifyList() {
    if (this.length < 2) return;
    let current = this.head;
    let list = [];
    let originalFirstHalf = [];

    while (current) {
      list.push(current);
      current = current.next;
    }

    let length = list.length;
    let mid = Math.floor(length / 2);

    for (let i = 0; i < mid; i++) {
      originalFirstHalf.push(list[i].data);
      list[i].data = list[length - 1 - i].data - list[i].data;
    }

    let j = mid - 1;

    for (let i = length % 2 ? mid + 1 : mid; i < length; i++) {
      list[i].data = originalFirstHalf[j];
      j--;
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

const nodes = new LinkedList();
nodes.append(10);
nodes.append(4);
nodes.append(5);
nodes.append(3);
nodes.append(6);
nodes.append(7);

console.log("Before:", nodes.print()); // 10 -> 4 -> 5 -> 3 -> 6

nodes.modifyList();

console.log("After:", nodes.print()); // -4 -> -1 -> 5 -> 4 -> 10

//Time Complexity O(n)
//Space Complexity O(n)
