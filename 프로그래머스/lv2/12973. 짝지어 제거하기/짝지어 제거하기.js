function solution(s) {
    const checkedAlphabetStack = [];
    for (let i = 0; i<=s.length-1; i++) {
        const lastAlphabetInStack = checkedAlphabetStack.pop();
        if (!lastAlphabetInStack) {
            checkedAlphabetStack.push(s[i]);
            continue;
        }
        if (s[i] !== lastAlphabetInStack) {
            checkedAlphabetStack.push(lastAlphabetInStack);
            checkedAlphabetStack.push(s[i]);
        }
    }
    return (checkedAlphabetStack.length === 0)?1:0;
}