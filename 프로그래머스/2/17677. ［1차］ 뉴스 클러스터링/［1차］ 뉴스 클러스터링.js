function solution(str1, str2) {
    const targetStr1 = str1.toLowerCase();
    const targetStr2 = str2.toLowerCase();
    
    function checkIsAlphabet(str) {
        return (('a' <= str) && ('z' >= str));
    }
    
    function elementCountHash(str) {
        const result = new Map();
        for (let i = 0; i <= str.length-2; i++) {
            if(checkIsAlphabet(str[i]) && checkIsAlphabet(str[i+1])) {
                const targetString = str.slice(i, i+2);
                result.set(targetString, (result.get(targetString)??0) + 1);
            }
        }
        return result;
    }
    
    const counter1 = elementCountHash(targetStr1);
    const counter2 = elementCountHash(targetStr2);
    let unionCounter = 0;
    let intersectionCounter = 0;
    
    for (let [str, count] of counter2) {
        const strCountInCounter1 = counter1.get(str);
        if(strCountInCounter1) {
            intersectionCounter += Math.min(strCountInCounter1, count);
            counter1.delete(str);
        }
        unionCounter += Math.max(strCountInCounter1??0, count);
    }
    
    const counter1TotalCount = Array.from(counter1.values()).reduce((acc, cur) => {
        return acc + cur;
    },0);
    const denominator = unionCounter + counter1TotalCount;
    const numerator = intersectionCounter;
    if (numerator === 0 && denominator === 0) return 1*65536;
    return Math.floor((numerator/denominator)*65536);
}