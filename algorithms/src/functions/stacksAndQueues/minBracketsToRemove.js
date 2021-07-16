//^ Given a string only containing round brackets and lowercase characters, remove the least amount of brackets so the string is valid. A string is considered valid if it is empty or if there are brackets, they all close.

//*  "a)bc(d)" return "abc(d)"
//* "(ab(c)d" return "ab(c)d" or "(abc)d"
//* "))((" return ""


// Complexity:
// Space: O(n)
// Time: O(n)
export const minRemoveToMakeValid = (str) => {
    const res = str.split('');
    const stack = [];

    for(let i=0; i<res.length; i++) {
        if(res[i] === '('){
            stack.push(i);
        } else if(res[i] === ')' && stack.length) {
            stack.pop();
        } else if(res[i] === ')') {
            res[i] = '';
        }
    }

    while(stack.length) {
        const curIndex = stack.pop();
        res[curIndex] = '';
    }

    return stack.join('')
}