//* Given a binary tree, return the level order traversal of the nodes' values as an array.

//^         3           [3]
//^     6       1       [6,1]
//^ 9       2       4   [9,2,4]
//^     5               [5]
//^ 8                   [8]
//^ Level Order = [ [3], [6,1], [9,2,4], [5], [8] ]

//* What do we return if the tree is empty ?
// Return an empty array.

// Complexity
// Time: O(n)  n=every node in the array
// Space: O(n/2) 
export const levelOrder = (root) => {
    if (!root) {
        return [];
    }

    const result = [];
    const queue = [root];

    while (queue.length) {
        let length = queue.length;
        let count = 0;
        const currentLevelValues = [];

        while (count<length) {
            const currentNode=queue.shift();
            currentLevelValues.push(currentNode.value);

            if (currentNode.left) {
                queue.push(currentNode.left);
            }

            if (currentNode.right) {
                queue.push(currentNode.right);
            }

            count++;
        }

        result.push(currentLevelValues);
    }
    return result;
}