class priorityQueue {
  constructor() {
    this.queue = [];
  }

  isEmpty() {
    return this.queue.length === 0;
  }

  enqueue(value, priority) {
    const newItem = { value, priority };
    let isAdded = false;

    for (let i = 0; i < this.queue.length; i++) {
      if (priority < this.queue[i].priority) {
        this.queue.splice(i, 0, newItem);
        isAdded = true;
        break;
      }
    }

    if (!isAdded) this.queue.push(newItem);
  }

  dequeue() {
    if (this.isEmpty()) return false;

    return this.queue.shift();
  }

  front() {
    return this.queue[0];
  }

  rear() {
    return this.queue[this.queue.length - 1];
  }

  display() {
    return this.queue;
  }
}

const pq = new priorityQueue();

pq.enqueue("A", 5);
console.log(pq.display()); // [ { value: 'A', priority: 5 } ]

pq.enqueue("B", 3);
console.log(pq.display()); // [ { value: 'B', priority: 3 }, { value: 'A', priority: 5 } ]

pq.enqueue("C", 6);
console.log(pq.display());
/*
[
  { value: 'B', priority: 3 },
  { value: 'A', priority: 5 },
  { value: 'C', priority: 6 }
]
*/

console.log(pq.dequeue()); // { value: 'B', priority: 3 }
console.log(pq.display());
/*
[
  { value: 'A', priority: 5 },
  { value: 'C', priority: 6 }
]
*/
