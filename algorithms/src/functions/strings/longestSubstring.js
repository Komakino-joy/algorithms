// Given a string, find the length of the longest substring without repeating characters

// 1. Is the string coniguous?
//* Contiguous: not breaks between the sequence. 
// - Yes, look for a substring, not a sub sequence. 
// 2. Does case matter ? 
// - No 


const findLongestSubstring = (str) => {
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