function solution(prices) {
    const answer = Array.from({length: prices.length}, () => 0);
    const indexStack = [];
    for (let i = prices.length - 1; i >= 0; i -=1) {
        while(indexStack.length > 0 && prices[indexStack[indexStack.length - 1]] >= prices[i]) {
            indexStack.pop();
        }
        
        answer[i] = indexStack.length > 0 ? indexStack[indexStack.length - 1] - i: prices.length - 1 - i;
        indexStack.push(i);
    }
    
    return answer;
}