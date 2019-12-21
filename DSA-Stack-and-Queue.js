class _Node {
  constructor(data, next) {
    this.data = data;
    this.next = next;
  }
}

class Stack {
  constructor() {
    this.top = null;
  }

  push(data) {
    if (this.top === null) {
      this.top = new _Node(data, null);
      return this.top;
    }
    const node = new _Node(data, this.top);
    this.top = node;
  }

  pop() {
    const node = this.top;
    this.top = node.next;
    return node.data;
  }
}

const starTrek = new Stack();

starTrek.push("Kirk");
starTrek.push("Spock");
starTrek.push("McCoy");
starTrek.push("Scotty");

// console.log(starTrek);

const peek = stack => {
  console.log(stack.top);
};

// peek(starTrek);

const isEmpty = stack => {
  if (stack.top !== null) {
    return true;
  } else {
    return false;
  }
};

// console.log(isEmpty(starTrek));

const display = stack => {
  let currNode = stack.top;
  while (currNode !== null) {
    console.log(currNode);
    currNode = currNode.next;
  }
};

// display(starTrek);

starTrek.pop();
starTrek.pop();

// Palindrome
// How would you do as a stack...?
function is_palindrome(s) {
  s = s.toLowerCase().replace(/[^a-zA-Z0-9]/g, "");
  // // Your code goes here
  // for (let i = 0; i < s.length / 2; i++) {
  //   if (s[i] !== s.charAt(s.length - 1 - i)) {
  //     return false;
  //   } else {
  //     return true;
  //   }
  // }
}

// True, true, true, false
// console.log(is_palindrome("dad"));
// console.log(is_palindrome("A man, a plan, a canal: Panama"));
// console.log(is_palindrome("1001"));
// console.log(is_palindrome("Tauhida"));

// Check for balanced parantheses

const matcher = expression => {
  const myStack = new Stack();
  for (let i = 0; i < expression.length; i++) {
    console.log(expression[i]);

    if (expression[i] === "(") {
      myStack.push(expression[i]);
      console.log(myStack.top);
    } else if (
      (expression[i] === ")" && myStack.top.data === "(") ||
      (expression[i] === ")" && myStack.top === null)
    ) {
      myStack.pop();
      // console.log("match");
    }
  }
  if (myStack.top === null) {
    return true;
  } else {
    console.log(myStack);
    return false;
  }
};

// console.log(matcher("((5+5)"));
// console.log(matcher("(5+5)"));
// console.log(matcher("((5+5)))"));

// Short Stack

const shortest = stack => {
  // smallest items are on the top

  let newStack = new Stack();
  while (stack.top) {
    let temp = stack.pop();
    if (newStack.top === null) {
      newStack.push(temp);
    } else if (newStack.top.data < temp) {
      let temp2 = newStack.pop();
      newStack.push(temp);
      newStack.push(temp2);
    } else {
      newStack.push(temp);
    }
  }

  return newStack;
};

const testStack = new Stack();

testStack.push(3);
testStack.push(6);
testStack.push(2);
testStack.push(9);
testStack.push(8);
testStack.push(1);

// console.log(shortest(testStack));

// Create a que using Singly Linked List

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
  }

  // Add to end of que
  enqueue(data) {
    const node = new _Node(data);

    if (this.first === null) {
      this.first = node;
    }

    if (this.last) {
      this.last.next = node;
    }

    this.last = node;
  }

  // remove from start of queue
  dequeue() {
    if (this.first === null) {
      return;
    }
    const node = this.first;
    this.first = this.first.next;

    if (node === this.last) {
      this.last = null;
    }
    return node.value;
  }
}
const starTrekQ = new Queue();

starTrekQ.enqueue("Kirk");
starTrekQ.enqueue("Spock");
starTrekQ.enqueue("Uhura");
starTrekQ.enqueue("Sulu");
starTrekQ.enqueue("Checkov");

const peek2 = queue => {
  console.log(queue.first);
};

// peek2(starTrekQ);

const isEmpty2 = queue => {
  if (queue.first === null) {
    return true;
  }
  return false;
};

// console.log(isEmpty2(starTrekQ));

const displayQueue = queue => {
  let currNode = queue.first;
  while (queue.next !== null) {
    console.log(currNode);
    currNode = currNode.next;
  }
};

// displayQueue(starTrekQ);

// Queue Implementation using a stack
let stack1 = new Stack();
let stack2 = new Stack();
let Que = new Queue();

Que.enqueue(stack1);
Que.enqueue(stack2);

// Square dance pairing

let maleQueue = new Queue();
let femQueue = new Queue();

const sorter = person => {
  if (person === "Jane" || person === "Madonna" || person === "Beyonce") {
    femQueue.push(person);
  } else {
    maleQueue.push(person);
  }
};

let count = 0;
let bankQueue = new Queue();
// Ophidian Bank
const bank = bankQueue => {
  if (count % 4 === 0) {
    let noPapers = bankQueue.dequeue();
    bankQueue.enqueue(noPapers);
  } else {
    bankQueue.dequeue();
  }
};
