function solution(n) {
    const boards = [];
    const queue = [{board: [], visited: new Set()}];
    while(queue.length > 0){
        const {board, visited} = queue.pop();
        if(board.length === n){
            boards.push(board);
            continue;
        }
        
        const targetBan = board.reduce((acc, cur, index) => {
            const diff = board.length - index;
            acc.add(cur + diff);
            acc.add(cur - diff);
            return acc;
        }, new Set());
        
        for (let i = 0; i < n; i+=1){
            const newBoard = [...board];
            const newVisited = new Set(visited);

            if(!visited.has(i) && !targetBan.has(i)){
                newBoard.push(i);
                newVisited.add(i);
                queue.push({board: newBoard, visited: newVisited});
            }
        }
    }
    
    return boards.length;
}
