// Given a string, find the length of the longest substring without repeating characters

// 1. Is the string coniguous?
//* Contiguous: not breaks between the sequence. 
// - Yes, look for a substring, not a sub sequence. 
// 2. Does case matter ? 
// - No 

// Complexity
// Space = O(n)
// Time = O(n^2)
const findLongestSubstringBruteforce = (str) => {
    if (str.length <= 1) {
        return str.length;
    }

    let longest = 0;
     
    for (left = 0; left < str.length; left++) {
        let seenChars = {};
        let currentLength = 0;

        for (right = left; right < str.length; right++) {
            const currentChar = str[right];

            if (!seenChars[currentChar]) {
                currentLength++;
                seenChars[crrentChar] = true;
                longest = Math.max(currentLength, longest);
            } else {
                break;
            }
        }
    }
    return longest;
}


// Complexity
// Space = O(n)
// Time = O(n)
const findLongestSubstringOptimal = (str) => {
    if (str.length <= 1) {
        return str.length;
    }

    const seenChar = {};
    let left = 0;
    let longest = 0;

    for (let right=0; right < s.length; right++) {
        const currentChar = s[right];
        const prevSeenChar = seenChar[currentChar];

        if (prevSeenChar >= left) {
            left = prevSeenChar + 1;
        }

        seenChar[currentChar] = right;

        longest = Math.max(longest, right - left + 1);
    }

    return longest;
}


const findLongestSubstringOptimalWithMap = (str) => {
    if (str.length <= 1) {
        return str.length;
    }

    const seenChar = new Map();
    let left = 0;
    let longest = 0;

    for (let right=0; right < s.length; right++) {
        const currentChar = s[right];
        const prevSeenChar = seenChar.get(currentChar);

        if (prevSeenChar >= left) {
            left = prevSeenChar + 1;
        }

        seenChar.set(currentChar, right);

        longest = Math.max(longest, right - left + 1);
    }

    return longest;
}