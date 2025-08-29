function solution(maps) {
    const dimensionMap = maps.map((row) => row.split(''));
    const findLocation = (target) => {
        const rowLocation = dimensionMap.findIndex((row) => row.includes(target));
        const columnLocation = dimensionMap[rowLocation].findIndex((column) => column === target);
        return [rowLocation, columnLocation];
    }
    
    const start = findLocation('S');
    const lever = findLocation('L');
    const end = findLocation('E');
    
    const findRoute = (start, end) => {
        const move = [[0, 1], [0, -1], [1, 0], [-1, 0]];
        const canMove = (y, x) => y >= 0 && x >= 0 && y < maps.length && x < maps[0].length;
        
        const visited = new Set([`[${start[0]}, ${start[1]}]`]);
        const queue = [{y: start[0], x: start[1], distance: 0}];
        
        while(queue.length > 0){
            const {y, x, distance} = queue.shift();
            if(y === end[0] && x === end[1]) return distance;
            
            move.forEach(([unitY, unitX]) => {
                const nextY = y + unitY;
                const nextX = x + unitX;
                const location = `[${nextY}, ${nextX}]`
                if(canMove(nextY, nextX) && dimensionMap[nextY][nextX] !== 'X' && !visited.has(location)) {
                    queue.push({y: nextY, x: nextX, distance: distance + 1});
                    visited.add(location);
                }
            })
        }
        
        return -1;
    }
    
    const toLever = findRoute(start, lever);
    const toEnd = findRoute(lever, end);
    return (toLever !== -1 && toEnd !== -1) ? toLever + toEnd : -1;
}