function solution(brown, yellow) {
    const total = brown + yellow;
    const divisor = new Map();
    
    for (let i = 1; i <= Math.sqrt(total); i += 1) {
        if (total % i === 0) {
            divisor.set(i, total / i);
        }
    }
    
    for (const [height, width] of divisor) {
        const yellowCount = (width - 2) * (height - 2);
        const brownCount = total - yellowCount;
        
        if(yellowCount === yellow && brownCount === brown) {
            return [width, height];
        }
    }
}