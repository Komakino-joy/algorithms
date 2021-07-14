// Structure
class ListNode {
    constructor(value, prev, next, child) {
        this.value = value; 
        this.prev = prev; 
        this.next = next;
        this.child = child;
    }
};

//^ Question: Given a doubly linked list, list nodes also have a child prop that canpoint to a seperate douly linked list. These child lists can also have one or more child doubly linked lists of their own, and so on. Return the list as a single level flattened doubly linked list. 

//* INPUT:
//*     1 -- 2 -- 3 -- 4 -- 5 -- 6
//*         |              |    
//*        7 -- 8 -- 9    12 -- 13
//*            |                    
//*           10 -- 11 

//* EXPECTED OUTPUT: 
//*     1--2--7--8--10--11--9--3--4--5--12--13--6


// Complexity
// Space: O(1)
// TIme: O(n)
export const flatten = (head) => {
    if (!head) {
        return head;
    }

    let currentNode = head;

    while (currentNode !== null) {
        if (currentNode.child === null) {
            currentNode = currentNode.next;
        } else {
            let tail = currentNode.child;

            while (tail.next !== null) {
                tail = tail.next;
            }

            tail.next = currentNode.next;

            if (tail.next !== null) {
                tail.next.prev = tail;
            }

            currentNode.next = currentNode.child;
            currentNode.next.prev = currentNode;
            currentNode.child = null;
        }
    }
}