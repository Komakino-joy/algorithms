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

const compareStrings = (S, T) => {
    return stringTranslator(S) === stringTranslator(T);
};