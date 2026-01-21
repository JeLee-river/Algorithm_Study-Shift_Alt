function solution(numbers) {
    const answer = Array.from({length: numbers.length}, () => -1);
    const record = [];
    
    for (let i = numbers.length - 1; i >= 0; i -= 1) {
        const current = numbers[i]
        
        while (current >= record[record.length - 1]) {
            record.pop();
        }
        
        answer[i] = record[record.length - 1] ?? -1;
        record.push(current);
    }
    
    return answer;
}