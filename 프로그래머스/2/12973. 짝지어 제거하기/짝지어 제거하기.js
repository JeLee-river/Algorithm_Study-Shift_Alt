function solution(s) {
    const history = [];
    for(let i = 0; i <= s.length - 1; i += 1) {
        if(history.length === 0) {
            history.push(s[i]);
        } else {
            const target = s[i];
            const lastHistory = history[history.length - 1];
            if(target === lastHistory){
                history.pop();
            } else {
                history.push(target);
            }
        }
    }
    
    return history.length === 0 ? 1 : 0;
}