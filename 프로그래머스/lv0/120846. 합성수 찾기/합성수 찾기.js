function solution(n) {
    if(n === 1 || n === 2) return 0
    
    let primeNumCounter = 2;
    for (let i = 3; i<=n; i+=2) {
        let checkPrime = true;
        for (let n = 3; n<=Math.sqrt(i); n++) {
            if(i%n === 0) {
                checkPrime = false;
                break;
            }
        }
        if(checkPrime) {
            primeNumCounter ++;
        }
    }
    return n-primeNumCounter;
}