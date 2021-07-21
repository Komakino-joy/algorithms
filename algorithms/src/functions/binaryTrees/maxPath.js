//* Given a binary tree, find its maximum depth.
// What do we return if the tree is empty ? 
// - Return 0

// Complexity:
// Time: O(n)    n=total number of nodes in the tree.
// Space: O(n)   n=number of nodes divided by two since each node should have 2 children
const maxDepth = (node, currentDepth) => {
    if (!node) {
        return currentDepth;
    }

    currentDepth++;

    return Math.max(maxDepth(node.left, currentDepth), maxDepth(node.right, currentDepth));
}