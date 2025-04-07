# class Queue { constructor() { this.array = []; } }

    * I have initialized a Queue class.

    * Inside the constructor, this.array is the underlying structure (an array) that holds the queue elements.

# isEmpty()

```js
isEmpty() {
  return this.array.length === 0;
}
```

    * Checks if the queue is empty by comparing the length of the array to 0.

    * Returns true if empty, false otherwise.

# enqueue(element)

```js

enqueue(element) {
  this.array.push(element);
}

```

    * Adds a new element to the rear of the queue.

    * push() appends it to the end of the array, maintaining the FIFO (First In, First Out) order.

# dequeue()

```js
dequeue() {
  if (!this.isEmpty()) this.array.shift();
}
```

    * Removes the front element from the queue.

    * Uses shift() which removes the first element of the array.

    * Note: shift() is not time-efficient for large queues, because it has to shift all other elements one index left.

# getFront()

```js

getFront() {
  return this.isEmpty() ? -1 : this.q[0];
}

```

    * Returns the front element of the queue.

    * If the queue is empty, it returns -1.

    * Bug Alert: This line contains an error:

        * You're accessing this.q[0], but the array is stored in this.array, not this.q.

        * It should be:

        * return this.isEmpty() ? -1 : this.array[0];

# display()

```js

display() {
  console.log(this.array.join(" "));
}

```

    * Simply prints the queue’s contents in a readable format.

    * Uses join(" ") to separate elements by a space.

# Summary

✅ Pros:

    * Easy to understand and use.

    * Good for small queues or learning purposes.

⚠️ Cons:

    * shift() is O(n) — not great for performance.

    * Minor bug in getFront() method.
