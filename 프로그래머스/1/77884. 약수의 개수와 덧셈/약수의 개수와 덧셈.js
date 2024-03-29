function solution(left, right) {
    let answer = 0;
    
    for (let i = left; i <= right; i+=1){
        if(i%Math.sqrt(i) === 0){
            answer -= i;
        } else {
            answer += i;
        }
    }
    
    return answer;
}