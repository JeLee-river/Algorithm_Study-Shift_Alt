function solution(cacheSize, cities) {
    const cacheTable = new Map();
    
    let time = 0;
    for (const cityString of cities) {
        const city = cityString.toUpperCase();
        if(!cacheTable.has(city)) {
            if(cacheTable.size === cacheSize) {
                const cacheTableKeys = Array.from(cacheTable.keys());
                const oldest = cacheTableKeys[0];
                cacheTable.delete(oldest);
            }
            if(cacheTable.size < cacheSize) {
                cacheTable.set(city, cacheTable.size);
            }
            
            time += 5;
        } else {
            cacheTable.delete(city);
            cacheTable.set(city, cacheTable.size);
            time += 1;
        }
    }
    
    return time;
}