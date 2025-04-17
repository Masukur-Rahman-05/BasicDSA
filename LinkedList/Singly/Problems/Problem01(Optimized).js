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
  append(data) {
    const newNode = new Node(data);
    if (this.head === null) {
      this.head = this.tail = newNode;
      this.length++;
      return true;
    }

    this.tail.next = newNode;
    this.tail = newNode;
    this.length++;
    return true;
  }

  reverse(head) {
    let prev = null;
    let current = head;

    while (current) {
      let newNext = current.next;
      current.next = prev;
      prev = current;
      current = newNext;
    }
    return prev;
  }

  modifyList() {
    if (this.length < 2) return;

    let fast = this.head;
    let slow = this.head;

    while (fast.next && fast.next.next) {
      slow = slow.next;
      fast = fast.next.next;
    }

    let secondHalf = this.reverse(slow.next);
    let first = this.head;
    let second = secondHalf;

    while (second) {
      let temp = first.data;
      first.data = second.data - first.data;
      second.data = temp;
      first = first.next;
      second = second.next;
    }

    slow.next = this.reverse(secondHalf);
  }

  print() {
    let current = this.head;
    let result = "";
    while (current) {
      result += current.data + (current.next ? " -> " : "");
      current = current.next;
    }
    return result;
  }
}

const node = new LinkedList();

node.append(10);
node.append(20);
node.append(30);
node.append(40);
node.append(50);
node.append(60);

console.log(node.print());

node.modifyList();
console.log(node.print());

//Time Complexity O(n)
//Space Complexity O(1)
