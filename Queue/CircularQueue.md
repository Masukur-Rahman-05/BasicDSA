# 📘 Circular Queue: Core Logic Explained

A circular queue is a linear data structure that uses a fixed-size array in a circular fashion to manage queue operations without shifting elements.

## 🔧 Main Components

```js
this.array = new Array(capacity); // Storage
this.capacity = capacity; // Max size of queue
this.size = 0; // Current number of elements
this.front = 0; // Points to the front element
```

# 🚀 Operations Explained

1. enqueue(element)

```js
const rear = (this.front + this.size) % this.capacity;
this.array[rear] = element;
this.size++;
```

    * Calculates the rear index by offsetting from the front using size.

    * The modulo % ensures the rear wraps around to the beginning when reaching the end of the array.

    * Stores the new element at the computed rear index.

### ✅ Checks:

    If size === capacity, the queue is full → can't enqueue.
