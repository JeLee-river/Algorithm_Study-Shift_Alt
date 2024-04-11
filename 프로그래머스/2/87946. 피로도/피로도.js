function solution(k, dungeons) {
    const answer = [];
    
    const play = (life, visited, cleared) => {
        if(visited.size === dungeons.length){
            answer.push(cleared);
            return;
        }
        
        for (let i = 0; i <= dungeons.length -1; i+=1){
            const newVisited = new Set(visited);
            if(!newVisited.has(i)){
                newVisited.add(i);
                if(life >= dungeons[i][0]){
                    play(life - dungeons[i][1], newVisited, cleared+1);
                } else {
                    play(life, newVisited, cleared);
                }
            }
        }
    }
    
    play(k, new Set(), 0);
    return Math.max(...answer);
}
