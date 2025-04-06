//Creating a Fixed size Stack

class Stack {
  constructor(capacity) {
    this.capacity = capacity;
    this.top = -1;
    this.array = new Array(capacity);
  }

  push(element) {
    if (this.top >= this.capacity - 1) console.log("Stack is full");
    else {
      this.array[++this.top] = element;
      return true;
    }
  }

  //   push(element) {
  //     if (this.top >= this.capacity - 1) console.log("Stack is full");
  //     else {
  //       this.top++;
  //       this.array[this.top] = element;
  //     }
  //   }

  pop() {
    this.array[this.top] = undefined;
    return this.array[this.top--];
  }
  //   pop() {
  //     let element = this.array[this.top];
  //     this.top--;
  //     return element;
  //   }

  peek() {
    return this.array[this.top];
  }

  isFull() {
    return this.top >= this.capacity - 1;
  }

  isEmpty() {
    return this.top < 0;
  }
}

const s = new Stack(5);

for (let i = 1; i <= 5; i++) {
  s.push(i);
}

console.log(s); //Stack { capacity: 5, top: 4, array: [ 1, 2, 3, 4, 5 ] }
console.log(s.array); //[ 1, 2, 3, 4, 5 ]

console.log(s.pop()); //5
console.log(s.top);
console.log(s.array); // [ 1, 2, 3, 4 ]
console.log(s.peek()); //4
s.push(10);
console.log(s.array); // [ 1, 2, 3, 4, 10 ]
console.log(s.isFull()); //true
console.log(s.isEmpty()); //false

s.pop();
console.log(s.array); // [ 1, 2, 3, 4 ]
console.log(s.isFull()); //false
