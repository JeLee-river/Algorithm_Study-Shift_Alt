function solution(x, y, n) {
    const multipleTwo = (num) => num * 2;
    const multipleThree = (num) => num * 3;
    const addN = (num) => num + n;
    const calculator = [multipleTwo, multipleThree, addN];
    
    const visited = new Set([x]);
    const answer = [];
    const queue = [{current: x, count: 0}]
    let currentIndex = 0;
    while(queue.length > currentIndex) {
        const {current, count} = queue[currentIndex];
        if(current === y) {
            return count;
        }
        
        calculator.forEach((method) => {
            const result = method(current);
            if(result <= y && !visited.has(result)){
                visited.add(result);
                queue.push({current: result, count: count + 1});   
            }
        });
        currentIndex += 1;
    }
    
    return -1;
}