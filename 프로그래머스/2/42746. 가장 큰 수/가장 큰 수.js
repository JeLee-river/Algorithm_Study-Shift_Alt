function solution(numbers) {
    const numbersString = numbers.map((number) => String(number));
    const removeZero = (numberString) => numberString.replace(/0/g,'');
    
    numbersString.sort((a,b) => {
        const totalString1 = a + b;
        const totalString2 = b + a; 
        return totalString2.localeCompare(totalString1);
    });
    
    const answer = numbersString.join('');
    if(removeZero(answer).length === 0){
        return '0';
    }
    return answer;
}