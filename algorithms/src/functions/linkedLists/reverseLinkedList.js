// Given a linked list, return it in reverse. 
//   input: 1 -> 2 -> 3 -> 4 -> 5 -> null
// output: 5 -> 4 -> 3 -> 2 -> 1 -> null

// What do we return if we get null or a single node? 
// - Return null and the node back respectively. 


// Complexity
// Space = O(1) 
// Time = O(n)
const reverseLInkedList = (head) => {
    let prev = null;
    let current = head;

    while (current) {
        let next = current.next;
        current.next = prev;
        prev = current;
        current = next;
    }
    return prev;
};