function solution(n,a,b) {
    const calculateNextIndex = (current) => {
        if(current % 2 === 0) {
            return current / 2;
        }
        
        return Math.ceil(current / 2);
    }
    
    let count = 1;
    while(Math.ceil(Math.min(a, b) / 2) !== Math.max(a, b) / 2) {
        a = calculateNextIndex(a);
        b = calculateNextIndex(b);
        count += 1;
    }
    
    return count;
}