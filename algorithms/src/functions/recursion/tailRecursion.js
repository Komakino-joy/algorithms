//^ Normal recursion space = O(n)
//^ Tail recursion space = O(1)

//* Factorial examples
//* Space complexity O(n)
function recFactorial(x) {
    if(x <= 1) {
        return 1;
    } else {
        return x * recFactorial(x-1);
    }
}

//*     recFactorial(4);
//*     4 * recFactorial(3);
//*     4 * (3 * recFactorial(2));
//*     4 * (3 * (2 * recFactorial(1)));
//*     4 * (3 * (2 * 1));
//*     answer is 24


//! JavaScript does not support tail recursion, therefore the complexity remains O(1) the engine compiling JavaScript does not support tail recursion
//* Space complexity O(1)
function tailFactorial(x, totalSoFar = 1) {
    if (x === 0) {
        return totalSoFar;
    } else {
        return tailFactorial(x - 1, totalSoFar * x);
    }
}

//*     tailFactorial(4);
//*     tailFactorial(4, 1);
//*     tailFactorial(3, 4);
//*     tailFactorial(2, 12);
//*     tailFactorial(1, 24);
//*     tailFactorial(0, 24);