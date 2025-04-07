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

# 2. dequeue()

```js
const element = this.array[this.front];
this.array[this.front] = undefined; // Optional cleanup
this.front = (this.front + 1) % this.capacity;
this.size--;
return element;
```

    * Returns the front element.

    * Cleans it up (optional but good for memory).

    * Moves the front pointer forward circularly.

    * Decreases size.

## ✅ Checks:

    If size === 0, queue is empty → return -1.

## 3. getFront()

```js
return this.array[this.front];
```

    Directly returns the current front element.

## 4. getRear()

```js
const rear = (this.front + this.size - 1) % this.capacity;
return this.array[rear];
```

    Calculates the index of the last (rear) element using modular arithmetic.

## 5. isEmpty() / isFull()

```js
return this.size === 0; // isEmpty
return this.size === this.capacity; // isFull
```

    Simple checks based on size.

# 🧠 Why Use a Circular Queue?

    * Avoids shifting elements on every dequeue like a normal array queue.

    * Achieves O(1) time complexity for enqueue() and dequeue().

    * Efficient use of fixed space, ideal for embedded systems, network buffers, job scheduling, etc.
