function solution(s){
    const stringArray = s.split('');
    const closed = [']', '}', ')'];
    const opened = ['[', '{', '('];
    const pair = new Map([['[', ']'], ['{', '}'], ['(', ')']]);
    const history = [];
    
    while(stringArray.length > 0){
        const target = stringArray.pop();
        if(closed.includes(target)){
            history.push(target);
            continue;
        }

        const lastBracket = history.pop();
        if(pair.get(target) !== lastBracket) return false;
    }
    
    return history.length > 0 ? false : true;
}