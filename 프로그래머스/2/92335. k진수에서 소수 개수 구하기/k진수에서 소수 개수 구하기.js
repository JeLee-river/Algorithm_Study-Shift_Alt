function solution(n, k) {
    const isPrimeNumber = (numString) => {
        const num = Number(numString);
        if (num === 1) return false;
        for (let i = 2; i<= Math.sqrt(num); i += 1) {
            if (num % i === 0) return false;
        }
        
        return true;
    }

    const baseNumber = n.toString(k);
    const splitedBaseNumber = baseNumber.split('0');
    return splitedBaseNumber.filter((numString) => numString && isPrimeNumber(numString)).length;
}