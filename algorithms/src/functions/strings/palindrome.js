const string = 'A man, a plan, a canal: Panama';


//^ Two pointers from the outside
export const isValidPalindromeTwoOut = (str) => {
    str = str.replace(/[^A-za-z0-9]/g, '').toLowerCase();

    //Initialize left/right pointers at start and end of string 
    let left= 0;
    let right = str.length -1;

    // Loop through string characters while comparing them, then move the pointers closer to the center
    while (left < right) {
        if (str[left] !== str[right]) {
            return false
        }

        left++;
        right--;
    }
}

//^ Two pointers from the center
export const isValidPalindromeCenter = function(s) {
    s = s.replace(/[^A-Za-z0-9]/g, '').toLowerCase();
    
    // initialize left/right pointers to point at the middle index of the string. Remember, indexes start at 0 meaning that we have to floor() the value from dividing length by 2 in order to get the index of the center.
    let left = Math.floor(s.length / 2), right = left;
    
    // if the string is even, move left pointer back by 1 so left/right are pointing at the 2 middle values respectively.
    if(s.length % 2 === 0) {
        left--;
    }
    
    // loop through the string while expanding pointers outwards comparing the characters.
    while(left >= 0 && right < s.length) {
        if(s[left] !== s[right]) {
            return false
        }
        
        left--;
        right++;
    }
    
    return true;
};


//^ Compare against reversed string
export const isValidPalindromeCompare = function(s) {
    s = s.replace(/[^A-Za-z0-9]/g, '').toLowerCase();
    let rev = "";
    
    // generate a reverse string using a reverse for loop.
    for(let i = s.length - 1; i >= 0; i--) {
        rev += s[i];
    }

    return rev === s;
};



// Complexity
// Time = O(n)
// Space = O(1)
const validSubPalindrome = (str, left, right) => {
    while (left < right) {
        if (str[left] !== str[right]) {
            return false;
        }

        left++;
        right--;
    }

    return true;
};

export const isAlmostPalindrome = (str) => {
    let left = 0;
    let right = str.length - 1;

    while (left < right) {
        if(str[left] !== str[right]) {
            // add to left or subtract from right to simulate skipping the char
            return validSubPalindrome(str, left + 1, right) || validSubPalindrome(str, left, right - 1);
        }

        left++;
        right--;
    }
    return true;
};


