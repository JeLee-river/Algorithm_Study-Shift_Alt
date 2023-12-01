function solution(numbers) {
    function isPrimeNumber(number) {
        if(number === 0 || number === 1) return false;
        if(number === 2) return true;
        if(number%2 === 0) return false;
        for (let i = 3; i <= Math.sqrt(number); i += 2) {
            if(number%i === 0) return false;
        }
        return true;
    }
    
    const answer = new Set();
    const targetNumbers = numbers.split('');
    const convertedNumber = targetNumbers.map(Number)
    const visited = new Set([...convertedNumber]);

    const queue = targetNumbers.map((number) => {
        const numberMap = new Map();
        targetNumbers.forEach((num) => {
            numberMap.set(num, (numberMap.get(num) ?? 0) + 1)
        });
        numberMap.set(number, numberMap.get(number) - 1);
        if(numberMap.get(number) === 0){
            numberMap.delete(number);
        }
        return [number, numberMap]
    });

    while(queue.length > 0){
        const currentNumber = queue.shift();
        if (isPrimeNumber(Number(currentNumber[0]))) answer.add(currentNumber[0]);
        
        if(currentNumber[1].size !== 0){
            const copiedNumberMap = new Map(currentNumber[1]);
            currentNumber[1].forEach((value, key) => {
                const newMap = new Map(copiedNumberMap);
                const result = currentNumber[0] + key;
                newMap.set(key, newMap.get(key) - 1);
                if(newMap.get(key) === 0){
                    newMap.delete(key);
                }

                if (!visited.has(Number(result))) {
                    visited.add(Number(result));
                    queue.push([result, newMap]);
                }           
            })
        }
    }
    return answer.size;
}