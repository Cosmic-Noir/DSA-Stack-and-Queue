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
  if (stack.top) {
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

function is_palindrome(s) {
  s = s.toLowerCase().replace(/[^a-zA-Z0-9]/g, "");
  // Your code goes here
}

// True, true, true, false
// console.log(is_palindrome("dad"));
// console.log(is_palindrome("A man, a plan, a canal: Panama"));
// console.log(is_palindrome("1001"));
// console.log(is_palindrome("Tauhida"));
