function solution(n, left, right) {
    const calculateElement = (index) => {
        const row = Math.floor(index / n) + 1;
        const column = index % n + 1;
        return Math.max(row, column);
    }
    
    const answer = [];
    for (let i = left; i <= right; i += 1) {
        answer.push(calculateElement(i));
    }
    
    return answer;
}