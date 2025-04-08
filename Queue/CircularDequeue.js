class CircularDequeue {
  constructor(capacity) {
    this.array = new Array(capacity);
    this.capacity = capacity;
    this.size = 0;
    this.front = 0;
    this.rear = 0;
  }

  isFull() {
    return this.size === this.capacity;
  }

  isEmpty() {
    return this.size === 0;
  }

  AddFront(element) {
    if (this.isFull()) return false;

    this.front = (this.front - 1 + this.capacity) % this.capacity;
    this.array[this.front] = element;
    this.size++;
  }

  AddRear(element) {
    if (this.isFull()) return false;

    this.array[this.rear] = element;
    this.rear = (this.rear + 1) % this.capacity;
    this.size++;
    return true;
  }

  RemoveFront() {
    if (this.isEmpty()) return false;

    let element = this.array[this.front];

    this.front = (this.front + 1) % this.capacity;
    this.size--;

    return element;
  }

  RemoveRear() {
    if (this.isEmpty()) return false;

    this.rear = (this.rear - 1 + this.capacity) % this.capacity;
    const element = this.array[this.rear];
    this.array[this.rear] = undefined;
    this.size--;
    return element;
  }

  size() {
    return this.size;
  }

  display() {
    let result = [];

    for (let i = 0; i < this.size; i++) {
      result.push(this.array[(this.front + i) % this.capacity]);
    }
    return result;
  }
}

const dq = new CircularDequeue(5);

console.log(dq.display()); // []

dq.AddRear(1);
dq.AddRear(2);
dq.AddRear(3);
console.log("After AddRear(1, 2, 3):", dq.display()); // [1, 2, 3]

dq.AddFront(0);
console.log("After AddFront(0):", dq.display()); // [0, 1, 2, 3]

dq.AddRear(4);
console.log("After AddRear(4):", dq.display()); // [0, 1, 2, 3, 4]

console.log("Trying to AddRear(5) on full queue:", dq.AddRear(5)); // false

console.log("RemoveFront():", dq.RemoveFront()); // 0
console.log("After RemoveFront():", dq.display()); // [1, 2, 3, 4]

console.log("RemoveRear():", dq.RemoveRear()); // 4
console.log("After RemoveRear():", dq.display()); // [1, 2, 3]

dq.AddFront(9);
console.log("After AddFront(9):", dq.display()); // [9, 1, 2, 3]

dq.AddRear(5);
console.log("After AddRear(5):", dq.display()); // [9, 1, 2, 3, 5]

console.log("Final queue state:", dq.display()); // [9, 1, 2, 3, 5]

console.log("RemoveFront():", dq.RemoveFront()); // 9
console.log("RemoveRear():", dq.RemoveRear()); // 5
console.log("Queue after removing front and rear:", dq.display()); // [1, 2, 3]
