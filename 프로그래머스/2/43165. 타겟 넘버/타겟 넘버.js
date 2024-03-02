function solution(numbers, target) {
    const sumNumber = numbers.reduce((accSum, num) => accSum + num);
    let answer = 0;
    
    const calculator = (currentValue, currentIndex) => {
        if(currentValue === target){
            answer += 1;
        } else {
            if(currentValue < target){
                return;
            }
            
            for(let i = currentIndex+1; i <= numbers.length-1; i+= 1){
                calculator(currentValue - 2 * numbers[i], i);
            }
        }
    }
    
    calculator(sumNumber, -1);
    
    return answer;
}