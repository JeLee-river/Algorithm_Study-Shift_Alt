function solution(numbers) {
    const answer = numbers.map((number) => {
        const bitNumber = number.toString(2);
        const numberArray = bitNumber.split('');
        if(number%4 === 3) {
            const containedOnes = [];
            while (numberArray.length > 0){
                const lastNumber = Number(numberArray.pop());
                if(lastNumber !== 1){
                    break;
                }
                containedOnes.push(lastNumber);
            }
            return number + 2 ** (containedOnes.length - 1);
        }
        return number + 1;
    })
    return answer;
}