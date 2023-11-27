function solution(x, y, n) {
    const calculateList = ['n','2','3'];

    function calculator(target, currentValue){
        if (target === 'n') return currentValue + n;
        if (target === '2') return currentValue * 2;
        if (target === '3') return currentValue * 3;
    }

    const answerList = [];
    const visited = new Set();
    let queue = [[x, 0]];
    visited.add(x);

    while (queue.length > 0) {
        const newQueue = [];
        for(let i = 0; i <= queue.length - 1; i++){
            const [currentValue, tryCount] = queue[i];
            if(currentValue === y) return tryCount;
            
            calculateList.forEach((target) => {
                const result = calculator(target, currentValue);

                if (!visited.has(result) && result <= y) {
                    visited.add(result);
                    newQueue.push([result, tryCount + 1]);
                }           
            })
        }
        queue = [...newQueue];
    }
    return -1;
}