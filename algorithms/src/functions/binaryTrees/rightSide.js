//* Given a binary tree, imagine you are standing to the right of the tree. Return an array of the values of the nodes you can see ordered from top to bottom.

// What do we return if there are no values in the tree ?
// Return an empty array

//^Breadth First Search Solution
//^ 1. Identify the end of level
//^ 2. Add last node to result array

export const rightSideViewBFS = function(root) {  
    if(!root) return [];
    const result = [];
    let queue = [root];
      
    while(queue.length) {
      let length = queue.length;
      let count = 0;
      let currentNode;
  
      while(count < length) {
        currentNode = queue.shift();
        
        if(currentNode.left) {
          queue.push(currentNode.left);
        }
        
        if(currentNode.right) {
          queue.push(currentNode.right);
        }
        
        count++;
      }
  
      result.push(currentNode.value)
    }
  
    return result;
  };



//^ Depth First Search Solution
//^ 1. Prioritize right-side
//^ 2. Keep track of the level of nodes
//^ 3. Use Preorder traversal: Node, Right, Left

const dfs = (node, currentLevel, result) => {
    if (!node) {
        return;
    }

    if (currentLevel >= result.length) {
        result.push(node.value);
    }

    if (node.right) {
        dfs(node.right, currentLevel + 1, result)
    }

    if (node.left) {
        dfs(node.left, currentLevel + 1, result)
    }
} 

export const rightSideViewDFS = (root) => {
    const result = [];
    dfs(root, 0, result);
    return result;
}