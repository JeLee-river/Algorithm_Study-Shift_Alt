function solution(cacheSize, cities) {
    const cacheHash = new Map();
    
    return cities.reduce((acc, cur, idx) => {
        const newCity = cur.toLowerCase();
        if(cacheHash.has(newCity)) {
            cacheHash.delete(newCity);
            cacheHash.set(newCity,idx);
            return acc + 1;
        }
        cacheHash.set(newCity,idx);
        if(cacheHash.size > cacheSize) {
            const cacheList = Array.from(cacheHash.keys());
            cacheHash.delete(cacheList[0]);
        }
        return acc + 5;
    },0)
}