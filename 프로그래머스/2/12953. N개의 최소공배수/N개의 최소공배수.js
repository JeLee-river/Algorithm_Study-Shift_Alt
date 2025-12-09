function solution(arr) {
    const getGCD = (bigger, smaller) => {
        let remain = bigger % smaller;
        while(remain !== 0) {
            const newRemain = smaller % remain;
            smaller = remain;
            remain = newRemain;
        }
        
        return smaller;
    }
    
    const getLCM = (bigger, smaller) => {
        return smaller * bigger / getGCD(bigger, smaller);
    }
    
    return arr.reduce((acc, cur) => {
        return getLCM(Math.max(acc, cur), Math.min(acc, cur));
    })
}