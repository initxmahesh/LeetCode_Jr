class List {
  constructor(value) {
    (this.value = value), (this.next = null);
  }
}

function insertAtHead(head, value) {
  const newNode = new List(value);
  if (!head) return newNode;
  newNode.next = head;
  return newNode;
}

function insertAtTail(head, value) {
  const newNode = new List(value);
  if (!head) return newNode;
  let curr = head;
  while (curr && curr.next) {
    curr = curr.next;
  }
  curr.next = newNode;
  return head;
}

function insertAtIndex(head, value, index) {
  const newNode = new List(value);

  if (index === 0) {
    newNode.next = head;
    return newNode;
  }

  let curr = head;
  let count = 0;
  while (curr && count < index - 1) {
    curr = curr.next;
    count++;
  }
  newNode.next = curr.next;
  curr.next = newNode;
  return head;
}

function transverse(head) {
  let curr = head;
  let result = "";
  while (curr) {
    // console.log(curr.value)
    result += curr.value + "---> ";
    curr = curr.next;
  }
  result += "null";
  console.log(result);
}

let head = new List(1);
console.log("Original LinkedList\n--------------------\n");
transverse(head);
console.log("\n--------------\ninsert at head\n---------------\n");
head = insertAtHead(head, 2);
transverse(head);
console.log("\n--------------\ninsert at tail\n---------------\n");
head = insertAtTail(head, 2);
transverse(head);
console.log("\n--------------\ninsert at tail\n---------------\n");
head = insertAtTail(head, 5);
transverse(head);
console.log("\n--------------\ninsert at tail\n---------------\n");
head = insertAtTail(head, 10);
transverse(head);
console.log("\n--------------\ninsert at given index\n---------------\n");
head = insertAtIndex(head, 100, 2);
transverse(head);
