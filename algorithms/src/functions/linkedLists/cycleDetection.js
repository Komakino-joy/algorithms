

// Complexity 
// Space: O(n)
// Time: O(n)
export const findCycleNaive = (head) => {
    let currentNode = head;
    const seenNodes = new Set();
    
    while (!seenNodes.has(currentNode)) {
        // Check if there is a tail (pointing to null), this implies no cycle.
        if (currentNode.next === null) {
            return false;
        }

        seenNodes.add(currentNode);

        currentNode = currentNode.next;
    }

    return currentNode;
}

// Complexity 
// Space: O(1)
// Time: O(n)
//^ Floyd's Tortoise and Hare Algorithm
export const findCycleOptimal = (head) => {
    let hare = head;
    let tortoise = head;

    while (true) {
        hare = hare.next;
        tortoise = tortoise.next;

        if (hare === null || hare.next === null) {
            return false;
        } else {
            hare = hare.next;
        }

        if (tortoise === hare) break;
    }

    let p1 = head;
    let p2 = tortoise; // or hare

    while (p1 !== p2) {
        p1 = p1.next;
        p2 = p2.next;
    }

    return p1; // or p2
}