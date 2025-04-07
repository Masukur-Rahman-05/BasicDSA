class Queue {
  constructor(capacity) {
    this.array = new Array(capacity);
    this.capacity = capacity;
    this.size = 0;
    this.front = 0;
  }

  enqueue(element) {
    if (this.size === this.capacity) {
      return false;
    }
    let rear = (this.front + this.size) % this.capacity;
    this.array[rear] = element;
    this.size++;
  }

  dequeue() {
    if (this.size === 0) {
      return -1;
    }

    const element = this.array[this.front];
    this.array[this.front] = undefined; // clean up
    this.front = (this.front + 1) % this.capacity;
    this.size--;
    return element;
  }

  getFront() {
    if (this.size === 0) return -1;

    return this.array[this.front];
  }

  getRear() {
    if (this.size === 0) return -1;

    let rear = (this.front + this.size - 1) % this.capacity;
    return this.array[rear];
  }

  isEmpty() {
    return this.size === 0;
  }

  isFull() {
    return this.size === this.capacity;
  }
}

let q = new Queue(5);

console.log(q);

for (let i = 1; i < 5; i++) q.enqueue(i);

console.log(q.array);

console.log(q.getFront());
console.log(q.getRear());

console.log(q.dequeue());
console.log(q.getFront());
console.log(q.array);
