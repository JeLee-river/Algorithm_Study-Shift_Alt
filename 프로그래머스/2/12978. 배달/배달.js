function solution(N, road, K) {
    const deliveryMap = Array.from({length: N}, () => []);
    
    road.forEach((info) => {
        const [location1, location2, time] = info;
        deliveryMap[location1-1].push([location2, time]);
        deliveryMap[location2-1].push([location1, time]);
    });

    const shortestRoad = new Map([[1, 0]]);
    const queue = [{currentTown: 1, currentTime: 0}];

    while(queue.length > 0){
        const {currentTown, currentTime} = queue.shift();
        const nearTowns = deliveryMap[currentTown-1];

        nearTowns.forEach(([nearTown, time]) => {
            const shortest = shortestRoad.get(nearTown) ?? -1;
            if(shortest === -1 || shortest > time + currentTime){
                shortestRoad.set(nearTown, time+currentTime);
                queue.push({currentTown: nearTown, currentTime: time+currentTime})
            }
        });
    }
        console.log(Array.from(shortestRoad.entries()))
    return Array.from(shortestRoad.entries()).filter((towns) => towns[1] <= K).length;
}