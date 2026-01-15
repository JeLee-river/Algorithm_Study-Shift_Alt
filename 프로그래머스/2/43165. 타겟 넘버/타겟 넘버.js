function solution(numbers, target) {
    let answer = 0;
    const caculator = (current, index) => {
        if(index === numbers.length) {
            if(current === target) {
                answer +=1;   
            }
            return;
        }
        
        const currentNumber = numbers[index];
        caculator(current + currentNumber, index + 1);
        caculator(current - currentNumber, index + 1);
    }
    
    caculator(0, 0);
    return answer;
}