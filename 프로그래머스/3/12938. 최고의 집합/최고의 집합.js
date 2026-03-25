function solution(n, s) {
    if (n === 1) return [s];
    if (n > s) return [-1];
    
    const initNum = Math.floor(s / n);
    const remain = s % n;
    const answer = Array.from({length: n}, () => initNum);
    for (let i = answer.length - 1; i >= answer.length - remain; i -= 1) {
        answer[i] += 1;
    }
    
    return answer;
}