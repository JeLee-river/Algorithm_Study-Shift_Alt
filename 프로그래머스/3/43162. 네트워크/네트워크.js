function solution(n, computers) {
    const visited = new Set();
    const queue = [];
    let answer = 0;
    
    for (let i = 0; i < n; i+=1){
        if(visited.size === n){
            return answer;
        }
        
        if(!visited.has(i)){
            visited.add(i);
            queue.push(computers[i]);
            answer += 1;

            while(queue.length > 0){
                const target = queue.shift();

                target.forEach((isLinked, index) => {
                    if(isLinked === 1 && index !== i && !visited.has(index)){
                        queue.push(computers[index]);
                        visited.add(index);
                    }
                });
            }
        }
    }
    return answer;
}