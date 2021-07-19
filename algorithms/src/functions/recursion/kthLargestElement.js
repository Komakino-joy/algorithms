//* Given an unsorted array, return the kth largest element, It is the kth largest element in sorted order, not the kth distinct element.

//^ Divide and conquer
//^ 1. Multi-branched recursion.
//^ 2. Breaks a problem into multiple smaller but same sub-problems.
//^ 3. Combines the solutions of sub-problems into the solution for the original problem.


const quickSort = (array, left, right) => {

    if (left < right) {
        const partitionIdx = partition(array, left, right);
        quickSort(array, left, partitionIdx - 1);
        quickSort(array, partitionIdx + 1, right);
    }
}

const partition = function(array, left, right) {
    const pivotElement = array[right];
    let partitionIdx = left;

    for (let j = left; j < right; j++) {
        if (array[j] < pivotElement) {
            swap(array, partitionIdx, j);
            partitionIdx++;
        }
    }
    swap(array, partitionIdx, right);
    return partitionIdx;
}

const swap = (array, i, j) => {
    const temp = array[i];
    array[i] = array[j];
    array[j] = temp;
}

//* Complexity
//* Space: O(n log n)
//* Time: O(n log n)
export const getKthLargest = (array, k) => {
    const indexToFind = array.length - k;
    quickSort(array, 0, array.length - 1);
    return array[indexToFind];
}