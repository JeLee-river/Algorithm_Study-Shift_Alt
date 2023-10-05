function solution(s) {
    const bracketCouple = new Map([ ['(', ')'], ['{', '}'], ['[', ']'] ]);
    const closedBracket = Array.from(bracketCouple.values());
    const cycledString = s.repeat(2);
    let answer = 0;
    for (let i = 0; i <= s.length-1; i++){
        const checkedBracketStack = [];
        const targetArr = cycledString.slice(i, i + s.length).split('');
        const lastBracket = targetArr.pop();
        if (!closedBracket.includes(lastBracket)) {
            continue;
        }
        
        checkedBracketStack.push(lastBracket);
        let isValidBracket = true;
        
        while (targetArr.length >= 1) {
            const targetBracket = targetArr.pop();
            if (closedBracket.includes(targetBracket)) {
                checkedBracketStack.push(targetBracket);
                continue;
            }
            const bracketInStack = checkedBracketStack.pop();
            if (bracketCouple.get(targetBracket) !== bracketInStack) {
                isValidBracket = false;
                break;
            }
        }
        if(isValidBracket && checkedBracketStack.length === 0) {
            answer++;
        }
    }
    return answer;
    
}