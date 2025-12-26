function solution(k, dungeons) {
    const visited = new Set();
    let answer = 0;
    
    const play = (fatigue, clearCount) => {   
        answer = Math.max(clearCount, answer);
        
        for (let i = 0; i <= dungeons.length - 1; i += 1) {
            if(visited.has(i)) continue;
            
            const [needs, resume] = dungeons[i];
            if(needs > fatigue) continue;
            visited.add(i);
            play(fatigue - resume, clearCount + 1);
            visited.delete(i);
        }
    }
    
    play(k, 0);
    return answer;
}