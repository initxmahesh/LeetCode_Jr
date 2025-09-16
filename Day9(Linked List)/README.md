## Day 9: Linked List Insert Operations

This module demonstrates basic linked list operations in JavaScript, focusing on inserting nodes at various positions in a singly linked list.

### Implemented Functions

- **insertAtHead(head, value):**

  - Inserts a new node with the given value at the beginning (head) of the list.

- **insertAtTail(head, value):**

  - Appends a new node with the given value at the end (tail) of the list.

- **insertAtIndex(head, value, index):**

  - Inserts a new node with the given value at the specified index (0-based) in the list.

- **transverse(head):**
  - Traverses the list and prints its elements in order.

### Example Usage

```js
let head = new List(1);
head = insertAtHead(head, 2); // List: 2 -> 1
head = insertAtTail(head, 5); // List: 2 -> 1 -> 5
head = insertAtIndex(head, 100, 2); // List: 2 -> 1 -> 100 -> 5
transverse(head); // Output: 2---> 1---> 100---> 5---> null
```

### Notes

- The `List` class defines a node with `value` and `next` properties.
- All functions handle the case where the list is initially empty (`head` is `null`).
- The code includes console logs to demonstrate the effect of each operation.

---
