class Dequeue {
  constructor() {
    this.array = [];
  }

  isEmpty() {
    return this.array.length === 0;
  }

  AddFront(element) {
    this.array.unshift(element);
    return true;
  }

  AddRear(element) {
    this.array.push(element);
    return true;
  }

  RemoveFront() {
    if (this.isEmpty()) return false;

    return this.array.shift();
  }

  RemoveRear() {
    if (this.isEmpty()) return false;

    return this.array.pop();
  }

  size() {
    return this.array.length;
  }
}

const d = new Dequeue();

console.log(d.isEmpty()); //true

d.AddFront(1); //[ 1 ]
d.AddFront(2); //[ 2, 1 ]

console.log(d.array); //[ 2, 1 ]

d.AddRear(9); //[ 2, 1, 9 ]
d.AddFront(5); //[ 5, 2, 1, 9 ]

console.log(d.array); //[ 5, 2, 1, 9 ]

d.RemoveFront(); // 5
console.log(d.array); //[ 2, 1, 9 ]

d.RemoveRear(); // 9
console.log(d.array); //[ 2, 1 ]
