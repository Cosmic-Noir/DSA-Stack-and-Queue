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

console.log(shortest(testStack));
