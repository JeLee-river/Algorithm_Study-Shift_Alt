function solution(keymap, targets) {
    const keyTable = new Map();
    
    keymap.forEach((keys) => {
        for (let i = 0; i <= keys.length - 1; i+=1){
            const currentKey = keyTable.get(keys[i]) ?? i+1;
            keyTable.set(keys[i], Math.min(currentKey, i+1));
        }
    });
    
    return targets.map((target) => {
        let total = 0;
        for (let i = 0; i <= target.length - 1; i+=1){
            total += keyTable.get(target[i]);
            
            if(!keyTable.has(target[i])){
                return -1;
            }
        }
        return total;
    });
}