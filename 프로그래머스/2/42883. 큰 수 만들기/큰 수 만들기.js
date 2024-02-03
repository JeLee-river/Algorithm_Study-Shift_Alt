function solution(number, k) {
    const initialLength = number.length;
    const answer = [];
    let removed = 0;
    for(let i = 0; i <= number.length-1; i+=1){
        while(answer.length > 0 && answer[answer.length-1] < number[i] && removed !== k){
            answer.pop();
            removed += 1;
        }
        if(answer.length !== initialLength-k) {
            answer.push(number[i]);
        }
    }
    return answer.join('');
}