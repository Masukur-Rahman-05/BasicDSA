# 📦 Fixed-Size Stack in JavaScript

## 📌 Overview

This markdown explains the logic and implementation of a **fixed-size stack** using JavaScript. It includes key methods like `push`, `pop`, `peek`, and utility checks like `isFull` and `isEmpty`.

---

## 🧠 Stack Logic & Structure

- A **stack** is a linear data structure that follows **LIFO** (Last In, First Out).
- Elements are added and removed from the **top**.
- This implementation uses a **fixed-size array** and a `top` pointer.

---

## 📄 JavaScript Code

```js
// Creating a Fixed size Stack
class Stack {
  constructor(capacity) {
    this.capacity = capacity;
    this.top = -1;
    this.array = new Array(capacity);
  }

  // Push element to stack
  push(element) {
    if (this.top >= this.capacity - 1) {
      console.log("Stack is full");
    } else {
      this.array[++this.top] = element;
      return true;
    }
  }

  // Pop element from stack
  pop() {
    this.array[this.top] = undefined; // Optional: clear the value
    return this.array[this.top--]; // Return then decrease top
  }

  // Peek the top element
  peek() {
    return this.array[this.top];
  }

  // Check if stack is full
  isFull() {
    return this.top >= this.capacity - 1;
  }

  // Check if stack is empty
  isEmpty() {
    return this.top < 0;
  }
}
```
