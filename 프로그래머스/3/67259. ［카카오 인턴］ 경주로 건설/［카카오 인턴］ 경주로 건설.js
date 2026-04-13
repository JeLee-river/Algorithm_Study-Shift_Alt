function solution(board) {
    const queue = [];
    const sortUp = (index) => {
        let currentIndex = index;
        while(currentIndex > 0) {
            const parentIndex = Math.ceil(currentIndex/2) - 1;
            if(queue[parentIndex] <= queue[currentIndex]) {
                break;
            }
            
            [queue[currentIndex], queue[parentIndex]] = [queue[parentIndex], queue[currentIndex]];
            currentIndex = parentIndex;
        }
    }

    const sortDown = (index) => {
        let currentIndex = index;
        while(true) {
            const leftChildIndex = 2 * currentIndex + 1;
            const rightChildIndex = 2 * currentIndex + 2;
            let minIndex = currentIndex;
            if(queue.length > leftChildIndex && queue[minIndex] > queue[leftChildIndex]) {
                minIndex = leftChildIndex;
            }
            
            if(queue.length > rightChildIndex && queue[minIndex] > queue[rightChildIndex]) {
                minIndex = rightChildIndex;
            }
            
            if(minIndex === currentIndex) {
                break;
            }
            
            [queue[minIndex], queue[currentIndex]] = [queue[currentIndex], queue[minIndex]];
            currentIndex = minIndex;   
        }
    }
    
    const addRoute = (route) => {
        queue.push(route);
        sortUp(queue.length - 1);
    }
    
    const getMin = () => {
        if(queue.length === 1) {
            return queue.pop();
        }
        
        const minRoute = queue[0];
        queue[0] = queue.pop();
        sortDown(0);
        return minRoute;
    }
    
    const n = board.length;
    const moves = [[0, 1], [0, -1], [1, 0], [-1, 0]];
    const costs = Array.from({length: n}, () => Array.from({length : n}, () => Array.from({length: 4}, () => Number.MAX_SAFE_INTEGER)));
    
    queue.push({cost: 0, x: 0, y:0, dir: -1});
    while(queue.length > 0) {
        const {cost, x, y, dir} = getMin();
        if(dir !== -1 && cost > costs[y][x][dir]) {
            continue;
        }
        
        for (let index = 0; index < moves.length; index += 1) {
            const nextX = moves[index][0] + x;
            const nextY = moves[index][1] + y;
            
            if(nextX < 0 || nextY < 0 || nextX >= n || nextY >= n || board[nextY][nextX] === 1) {
                continue;
            }
            
            const nextCost = (dir === -1 || dir === index) ? cost + 100 : cost + 600;
            
            if(costs[nextY][nextX][index] > nextCost) {
                costs[nextY][nextX][index] = nextCost;
                addRoute({cost: nextCost, x: nextX, y: nextY, dir: index});
            }
        }
    }
    
    return Math.min(...costs[n-1][n-1]);
}