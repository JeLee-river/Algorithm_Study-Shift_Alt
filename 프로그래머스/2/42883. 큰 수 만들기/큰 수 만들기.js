function solution(number, k) {
    const answer = [];
    
    for (let i = 0; i < number.length; i++) {
        while (k > 0 && answer.length > 0 && answer[answer.length - 1] < number[i]) {
            answer.pop();
            k -= 1;
        }
        answer.push(number[i]);
    }

    answer.splice(answer.length - k, k);

    return answer.join('');
}