//^ Given a linked list and numbers m and n, return it back with only positions m to n in reverse. 


//& Will m and n always be within the bounds of the linked list ?
//~ -Yes, assume 1 <= m <= n <= length of linked list. 
//& Can we receive m and n values for the whole linked list ?
//~ -Yes, we can receive m = 1 and n = length of linked list. 

//* TEST CASE
//* input: 1 -> 2 -> 3 -> 4 -> 5 -> null
//* m=2, n=4 :: positioning is 1 indexed
//* output: 1 -> 4 -> 3 -> 2 -> 5 -> null


const m = 2;
const n = 4;


//Complexuity; Time = O(n), Space = O(1)
const reverseBetween = (head, m, n) => {
    let currentPos = 1; //head position
    let currentNode = head;
    let start = head;

    while (currentPos < m) {
        start = currentNode;
        currentNode = currentNode.next;
        currentPos++;
    }

    let newList = null;
    let tail = currentNode;

    while (currentPos >= m && currentPos <= n) {
        const next = currentNode.next;
        currentNode.next = newList;
        newList = currentNode
        currentNode = next;
        currentPos++;
    }

    start.next = newList;
    tail.next = currentNode;

    if (m > 1) {
        return head;
    } else {
        return newList;
    }
}