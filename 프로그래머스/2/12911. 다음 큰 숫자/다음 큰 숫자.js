function solution(n) {
    const countNumbersOfOne = (number) => {
        const binary = number.toString(2);
        return binary.split('').filter((num) => num === '1').length;
    }
    
    const numbersOfOne = countNumbersOfOne(n);
    while(true) {
        const target = n + 1;
        if(numbersOfOne === countNumbersOfOne(target)){
            return target;
        }
        
        n = target;
    }   
}