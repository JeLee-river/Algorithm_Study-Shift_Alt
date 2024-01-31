function solution(s){
    const checked = [];
    
    for (const bracket of s) {
        if (bracket === '(') {
            checked.push(bracket);
        } else if (checked.length === 0) {
            return false;
        } else {
            checked.pop();
        }
    }
    return checked.length === 0;
}