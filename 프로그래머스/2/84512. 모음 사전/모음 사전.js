function solution(word) {
    const digit = [781, 156, 31, 6, 1];
    const order = ['A', 'E', 'I', 'O', 'U'];
    
    let answer = 0;
    for (let i = 0; i <= word.length - 1; i += 1) {
        answer += order.indexOf(word[i]) * digit[i] + 1;
    }
    
    return answer;
}