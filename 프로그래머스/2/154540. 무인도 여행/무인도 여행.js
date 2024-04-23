function solution(maps) {
    const indexingMap = maps.map((row) => row.split(''));
    const flattedMap = [].concat(...indexingMap);
    
    const foodList = [];
    const visited = new Set();
    
    for (let i = 0; i <= flattedMap.length - 1; i+=1){
        let totalFood = 0;
        if(!visited.has(i)){
            const queue = [i];

            while(queue.length > 0){
                const movedLand = queue.shift();
                const food = flattedMap[movedLand];

                if(food !== 'X' && !visited.has(movedLand)){
                    visited.add(movedLand);
                    totalFood += Number(food);
                    
                    const columnLength = maps[0].length;
                    let step = [1, -1, columnLength, -columnLength];
                    
                    if(movedLand % columnLength === columnLength-1){
                        step = step.filter((destination) => destination !== 1);
                    }
                    
                    if(movedLand%columnLength === 0){
                        step = step.filter((destination) => destination !== -1);
                    }
                    
                    step.forEach((destination) => {
                        const nextLand = movedLand + destination;                        
                        if(nextLand >= 0 && nextLand <= flattedMap.length - 1){
                            queue.push(nextLand);
                        }
                    });
                }
            }
        }
        
        if(totalFood !== 0) foodList.push(totalFood);
    }
    
    foodList.sort((prev, next) => prev - next);
    return (foodList.length !== 0) ? foodList : [-1];
}