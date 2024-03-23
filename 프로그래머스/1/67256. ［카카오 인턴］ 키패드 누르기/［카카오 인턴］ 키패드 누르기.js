function solution(numbers, hand) {
    const keypad = new Map();
    
    for (let i = 1; i <= 12; i+=1){
        if(i%3 === 1){
            keypad.set(i, 'L');
        }
        if(i%3 === 0){
            keypad.set(i, 'R');
        }
    }
    
    const calculateDistance = (prevKey, targetKey) => {
        const distance = Math.abs(targetKey-prevKey);
        if(distance%3 === 0) return distance/3;
        if(distance === 1) return 1;
        if(distance === 4 || distance === 2) return 2;
        if(distance === 7 || distance === 5) return 3;
        if(distance === 10 || distance === 8) return 4;
    }
    
    let leftKey = 10;
    let rightKey = 12;
    
    const answer = numbers.map((number) => {
        const key = (number !== 0) ? number : 11;
        
        if(keypad.has(key)){
            const movedHand = keypad.get(key);
            if(movedHand === 'L'){
                leftKey = key;
            } else {
                rightKey = key;
            }
            return movedHand;
        }
        
        const leftDistance = calculateDistance(leftKey, key);
        const rightDistance = calculateDistance(rightKey, key);
        if(leftDistance === rightDistance){
            if(hand === 'right'){
                rightKey = key;
                return 'R'
            } else {
                leftKey = key;
                return 'L'
            }
        }
        
        if(leftDistance > rightDistance){
            rightKey = key;
            return 'R'
        }
        leftKey = key;
        return 'L';
    });
    return answer.join('');
}