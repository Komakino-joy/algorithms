//^ Anything you do with recursion CAN be done iteratively (loop)
//* Rule of thumb, use recursion when you do not know how deep a data structure is, ie. binary trees.

//* When to use recursion
//* Traversing or searching through trees and graphs
//* Some cases in sorting 
//* Every time you are using a tree or converting something into a tree, consider recursion.

function fibonacciIterative(n) {
    let arr = [0,1];
    for (let i = 2; i < n; i++) {
        arr.push(arr[i-2] + arr[i-1]);
    }
    return  arr[n];
}

// fibonacciIterative(2);

function fibonacciRecursive(n) {
    if (n < 2) {
        return n;
    }

    return fibonacciRecursive(n-1) + fibonacciRecursive(n-2)
}

// fibonacciRecursive(43);