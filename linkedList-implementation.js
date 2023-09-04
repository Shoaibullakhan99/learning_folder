// const list = {
//   head: {
//     value: 6,
//     next: {
//       value: 3,
//       next: {
//         value: 5,
//         next: {
//           value: 9,
//           next: {
//             value: 4,
//             next: null,
//           },
//         },
//       },
//     },
//   },
// };

//Advantage over arrays, Nodes can be easily removed and added from the linked list without reorganizing the entire data structure

class ListNode {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class LinkedList {
  constructor(head = null) {
    this.head = head;
  }

  //Linked List methods

  push(data) {
    let newNode = new ListNode(data);
    if (!this.head) {
      this.head = newNode;
    } else {
      this.head.next = newNode;
    }

    return newNode;
  }

  size() {
    let count = 0;
    let node = this.head;
    while (node) {
      count++;
      node = node.next;
    }
    return count;
  }

  clear() {
    this.head = null;
  }

  getFirst() {
    return this.head;
  }

  getLastNode() {
    let lastNode = this.head;
    if (lastNode) {
      while (lastNode.next) {
        lastNode = lastNode.next;
      }
    }
    return lastNode;
  }
}

// let node1 = new ListNode(1);
// let node2 = new ListNode(5);

// node1.next = node2;
// console.log(node1);

let list = new LinkedList();
// console.log(list.getLastNode());

// console.log(list.head.next.data);

// console.log(list.clear());
// console.log(list.size());

list.push(10);
list.push(5);
console.log("Before clearing the list: ", list);
list.clear();
list.push(9);
list.push(13);
console.log("After clearing the list: ", list);
console.log(list.size());
console.log(list.getFirst());
console.log(list.getLastNode());
console.log(list.size());
