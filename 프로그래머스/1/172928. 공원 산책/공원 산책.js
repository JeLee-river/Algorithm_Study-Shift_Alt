function solution(park, routes) {
    const record = [];
    const parkGuide = park.map((row) => row.split(''));
    const moveDirection = {N: -1, S: 1, W: -1, E: 1};
    
    park.forEach((row, index) => {
        for (let i = 0; i <= row.length-1; i+=1){
            if(row[i] === 'S'){
                record.push([index, i]);
                return;
            }
        }
    });

    routes.forEach((route) => {
        const [direction, step] = route.split(' ');
        const current = record.pop();
        const next = [...current];
        let move = 0;
        
        while(move < step){
            if(direction === 'E' || direction === 'W'){
                next[1] += moveDirection[direction];
            } else {
                next[0] += moveDirection[direction];
            }

            if(next[0] > park.length - 1 || 
               next[1] > park[0].length - 1 ||
               next[0] < 0 ||
               next[1] < 0 || 
               parkGuide[next[0]][next[1]] === 'X'
              ){
                record.push(current);
                break;
            }
            move += 1;
            record.push(next);
        }
    });
    return record.pop();
}