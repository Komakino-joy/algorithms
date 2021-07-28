//* every node to the right of a parent node must be less than the root, all values to the right must be greater. 
//* Can there be duplicate values, if so where do we put them, to the left or right of their equivalent ? 
// No duplicate values, return false

//^ DFS - Preorder Node Left Right


//* Complexity
//* Time: O(n)
//* Space: O(n)
export const isValidBST = (root) => {
    if (!root) return true;

    return dfs(root, -Infinity, Infinity);
}

const dfs = (node, min, max) => {
    if (node.value <= min || node.value >= max) {
        return false;
    }

    if (node.left) {
        // Updating max, persisting min
        if (!dfs(node.left, min, node.val)) {
            return false;
        }
    }

    if (node.right) {
        // Updating max, persisting min
        if (!dfs(node.right, node.val, max)) {
            return false;
        }
    }

    return true;
}