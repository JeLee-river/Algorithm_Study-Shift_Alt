function solution(number, limit, power) {
    const isSquare = (num) => Number.isInteger(Math.sqrt(num));
    let answer = 0;
    
    for (let i = 1; i <= number; i += 1){
        let count = 0;
        for (let divisor = 1; divisor < Math.sqrt(i); divisor += 1){
            if(i%divisor === 0){
                count += 2;
            }
        }
        if(isSquare(i)){
            count += 1;
        }
        
        if(count > limit){
            answer += power;
        } else {
            answer += count;
        }
    }
    
    return answer;
}