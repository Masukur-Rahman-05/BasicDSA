class Queue {
  constructor() {
    this.array = [];
  }

  isEmpty() {
    return this.array.length === 0;
  }

  enqueue(element) {
    this.array.push(element);
  }

  dequeue() {
    if (!this.isEmpty()) this.array.shift();
  }

  getFront() {
    return this.isEmpty() ? -1 : this.q[0];
  }

  display() {
    console.log(this.array.join(" "));
  }
}
