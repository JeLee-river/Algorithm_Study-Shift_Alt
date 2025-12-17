function solution(s) {
    const bracketMap = new Map([['(', ')'], ['{', '}'], ['[', ']']]);
    const openBracket = ['(', '{', '['];
    const closeBracket = [')', '}', ']'];
    
    const checkBracketValidation = (str) => {
        const sArray = str.split('');
        const history = [];
        
        while(sArray.length > 0){
            const target = sArray.pop();
            if(closeBracket.includes(target)){
                history.push(target);
                continue;
            }

            const lastBracket = history.pop();
            if(bracketMap.get(target) !== lastBracket) return false;
        }
        
        return history.length === 0;
    }
    
    let targetString = s;
    let answer = 0;
    for (let i = 0; i <= targetString.length - 1; i += 1) {
        if(checkBracketValidation(targetString)) {
            answer += 1;
        }
        
        targetString = targetString.slice(1) + targetString[0];
    }
    
    return answer;
}