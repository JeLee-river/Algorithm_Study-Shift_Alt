function solution(players, m, k) {
    const managedServer = [];
    
    players.forEach((player, index) => {
        const neededServers = Math.floor(player / m);
        
        if(neededServers >= 1){
            const validServer = managedServer.filter((timer) => timer >= index);
            const newServers = neededServers - validServer.length;
            
            if(newServers > 0){
                for (let i = 0; i < newServers; i += 1){
                    managedServer.push(index + k - 1);      
                }
            }
        }
    });
    
    return managedServer.length;
}