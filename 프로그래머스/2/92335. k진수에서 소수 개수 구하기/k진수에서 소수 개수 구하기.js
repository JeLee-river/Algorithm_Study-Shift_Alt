function solution(n, k) {
    const target = n.toString(k);
    const splitedTarget = target.split('0');
    const filteredTarget = splitedTarget.filter((number) => number !== '');
    let answer = 0;
    
    filteredTarget.forEach((number) => {
        if(isPrime(Number(number))) {
            answer += 1;
        }
    })
    return answer;

    function isPrime(number) {
        if(number === 1){
            return false;
        }
        if((number > 2) && (number%2 === 0)){
            return false;
        }
        for (let i = 3; i <= Math.sqrt(number); i+=2) {
            if(number%i === 0){
                return false;
            }
        }
        return true;
    }
}