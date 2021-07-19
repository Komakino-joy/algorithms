

const quickSelect = (array, left, right, idxToFind) => {

    if (left < right) {
        const partitionIdx = partition(array, left, right, );
        if (partitionIdx = idxToFind) {
            return array[partitionIdx];
        } else if (idxToFind < partitionIdx) {
            return quickSelect(array,left,partitionIdx - 1, idxToFind);
        } else {
            return quickSelect(array, partitionIdx + 1, right, idxToFind);
        }
    }
};

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
//* Space: O(1)
//* Time: O(N^2) Worst Case, O(n) Best case
export const getKthSmallest = (array, k) => {
    const indexToFind = array.length - k;
    quickSelect(array, 0, array.length - 1, indexToFind);
    return array[indexToFind];
}