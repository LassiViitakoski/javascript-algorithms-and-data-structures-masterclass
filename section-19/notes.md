# Singly Linked List

### What is a linked list?

- A data structure contains ahead, tail and length property
- Linked Lists consist of nodes, and each node has a value and a pointer to another node or null

### Comparsisons with Arrays

- Lists
  - Do not have indexes!
  - Connected via nodes with a next pointer
  - Randopm access is not allowed

- Arrays
  - Indexed in order!
  - Insertion and deletion can be expensive
  - Can quickly be accessed at a specific index


### Big O of Singly Linked Lists

- Insertion - O(1)
- Removal - It depends... O(1) or O(n)
- Searching - O(n)
- Access - O(n)


### Singly Linked List Code

```javascript
class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(val) {
    const newNode = new Node(val);

    if (this.head) {
      this.tail.next = newNode;
      this.tail = newNode;
    } else {
      this.head = newNode;
      this.tail = newNode;
    }

    this.length++;
    return this;
  }

  pop() {
    if (!this.head) return undefined;

    let current = this.head;
    let newTail = current;

    while (current.next) {
      newTail = current;
      current = current.next;
    }

    this.tail = newTail;
    this.tail.next = null;
    this.length--;

    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }

    return current;
  }

  unshift(val) {
    let newNode = new Node(val);

    newNode.next = this.head;

    this.head = newNode;
    this.length++;
    if (!this.tail) this.tail = newNode;

    return this.head;
  }

  shift() {
    if (!this.head) return undefined;

    const current = this.head;
    this.head = current.next;
    this.length--;

    return current;
  }

  get(index) {
    if (this.length <= index || index < 0) return null;

    let current = this.head;
    for (let i = 0; i < index; i++) current = current.next;

    return current;
  }

  set(index, val) {
    let targetNode = this.get(index);
    if (targetNode) targetNode.val = val;

    return targetNode ? true : false;
  }

  insert(index, val) {
    if (this.length < index || index < 0) return false;
    if (this.length === index) !!this.push(val);
    if (index === 0) !!this.unshift(val);

    const newNode = new Node(val);
    const prevNode = this.get(index - 1);

    newNode.next = prevNode.next;
    prevNode.next = newNode;

    this.length++;
    return true;
  }

  remove(index) {
    if (this.length <= index || index < 0) return undefined;
    if (this.length - 1 === index) return this.pop();
    if (index === 0) return this.shift();

    const prevNode = this.get(index - 1);
    const targetNode = prevNode.next;

    prevNode.next = targetNode.next;

    this.length--;
    return targetNode;
  }

  reverse() {
    let node = this.head;
    let prev = null;
    let next;

    this.head = this.tail;
    this.tail = node;

    for (let i = 0; i < this.length; i++) {
      next = node.next;
      node.next = prev;

      prev = node;
      node = next;
    }

    return this;
  }
}
```