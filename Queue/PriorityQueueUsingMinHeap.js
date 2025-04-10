class PriorityQueueUsingMinHeap {
  constructor() {
    this.heap = [];
  }

  parent(index) {
    return Math.floor((index - 1) / 2);
  }
  left(index) {
    return 2 * index + 1;
  }
  right(index) {
    return 2 * index + 2;
  }

  isEmpty() {
    return this.heap.length === 0;
  }

  size() {
    return this.heap.length;
  }

  swap(a, b) {
    [this.heap[a], this.heap[b]] = [this.heap[b], this.heap[a]];
  }

  enqueue(value, priority) {
    let newNode = { value, priority };
    this.heap.push(newNode);
    this.heapifyUp(this.heap.length - 1);
  }

  heapifyUp(index) {
    while (
      index > 0 &&
      this.heap[this.parent(index)].priority > this.heap[index].priority
    ) {
      this.swap(index, this.parent(index));
      index = this.parent(index);
    }
  }

  dequeue() {
    if (this.isEmpty()) return false;
    let root = this.heap[0];
    let last = this.heap.pop();

    if (!this.isEmpty()) {
      this.heap[0] = last;
      this.heapifyDown(0);
    }

    return root;
  }

  heapifyDown(index) {
    let smallest = index;
    let left = this.left(index);
    let right = this.right(index);

    if (
      left < this.heap.length &&
      this.heap[left].priority < this.heap[smallest].priority
    ) {
      smallest = left;
    }
    if (
      right < this.heap.length &&
      this.heap[right].priority < this.heap[smallest].priority
    ) {
      smallest = right;
    }

    if (smallest !== index) {
      this.swap(index, smallest);
      this.heapifyDown(smallest);
    }
  }

  top() {
    return this.heap[0];
  }

  display() {
    return this.heap;
  }
}

const pq = new PriorityQueueUsingMinHeap();
console.log(pq.display()); //[]
pq.enqueue("Five", 5);
console.log(pq.heap); //[ { value: 'Five', priority: 5 } ]

pq.enqueue("Four", 4);
console.log(pq.display()); //[ { value: 'Four', priority: 4 }, { value: 'Five', priority: 5 } ]
pq.enqueue("Thhree", 3);
console.log(pq.display());
/*
[
  { value: 'Thhree', priority: 3 },
  { value: 'Five', priority: 5 },
  { value: 'Four', priority: 4 }
]
  */
pq.enqueue("One", 1);
console.log(pq.display());
/*
[
  { value: 'One', priority: 1 },
  { value: 'Thhree', priority: 3 },
  { value: 'Four', priority: 4 },
  { value: 'Five', priority: 5 }
]
*/

pq.dequeue();
console.log(pq.display());
/*
[
  { value: 'Thhree', priority: 3 },
  { value: 'Five', priority: 5 },
  { value: 'Four', priority: 4 }
]
*/

pq.dequeue();
console.log(pq.display()); //[ { value: 'Four', priority: 4 }, { value: 'Five', priority: 5 } ]

console.log(pq.top());
