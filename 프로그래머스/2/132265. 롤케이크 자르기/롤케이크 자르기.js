function solution(topping) {
    const toppingMap = new Map();
    
    topping.forEach((item) => {
        toppingMap.set(item, (toppingMap.get(item) ?? 0) + 1);
    });
    
    let answer = 0;
    const currentTopping = new Set();
    for (const item of topping) {
        currentTopping.add(item);
        
        if(toppingMap.has(item)) {
            toppingMap.set(item, toppingMap.get(item) - 1);
        }
        
        if(toppingMap.get(item) === 0) {
            toppingMap.delete(item);
        }
        
        if(toppingMap.size === currentTopping.size) {
            answer += 1;
        }
    }
    
    return answer;
}