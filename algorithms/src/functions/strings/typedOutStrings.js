// Given two strings S and T, return if they equal when both are typed out. Any '#' that appears in the string counts as a backspace

const S = 'He##y' // should equal 'y'


// Complexity
// Time O(a+b)
// Space O(a+b)
const stringTranslator = (string) => {
    const finalString = [];

    string = string.split('');

    for (let p = 0; p < string.length; p++) {
        if (string[p] !== '#') {
            finalString.push(string[p]);
        } else {
            finalString.pop()
        };
    }

    return finalString.join();
}

export const backSpaceCompareBruteForce = (S, T) => {
    return stringTranslator(S) === stringTranslator(T);
};


// Complexity
// Time O(a+b)
// Space O(1)
export const backSpaceCompareOptimal = (s, t) => {
    let p1 = s.length - 1;
    let p2 = t.length - 1;

    while (p1 >= 0 || p2 >= 0) {
        if(s[p1] === '#' || t[p2] === '#') {

            if(s[p1] === '#') {
                let backCount = 2;
                while (backCount > 0) {
                    p1--;
                    backCount--;
                    if(s[p1] === '#') {
                        backCount = backCount + 2;
                    };
                };
            };
            
            if (t[p2] === '#') {
                let backCount = 2;
                while(backCount > 0) {
                    p2--;
                    backCount--;
                    if(t[p2] === '#') {
                        backCount = backCount + 2;
                    };
                };
            };

        } else {
            if(s[p1] !== t[p2]) {
                return false;
            } else {
                p1--;
                p2--;
            }
        }
    };

    return true;
};