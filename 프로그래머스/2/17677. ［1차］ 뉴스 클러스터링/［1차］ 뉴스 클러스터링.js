function solution(str1, str2) {
    const strs = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
    
    const getSet = (str) => {
        const setArr = [];
        for (let i = 0; i <= str.length - 2; i += 1) {
            if(strs.includes(str[i]) && strs.includes(str[i+1])) {
                setArr.push(`${str[i]}${str[i+1]}`);
            }
        }
        
        return setArr;
    }
    
    const getMap = (arr) => {
        const result = new Map();
        arr.forEach((str) => {
            result.set(str, (result.get(str) ?? 0)+ 1);
        });
        
        return result;
    }
    
    const convertedStr1 = getSet(str1.toUpperCase());
    const convertedStr2 = getSet(str2.toUpperCase());
    const str1Map = getMap(convertedStr1);
    const str2Map = getMap(convertedStr2);
    
    const keys = new Set([...str1Map.keys(), ...str2Map.keys()]);

    let intersectionCount = 0;
    let unionCount = 0;

    for (const key of keys) {
        const str1Count = str1Map.get(key) ?? 0;
        const str2Count = str2Map.get(key) ?? 0;
        intersectionCount += Math.min(str1Count, str2Count);
        unionCount += Math.max(str1Count, str2Count);
    }

    if (unionCount === 0) return 65536;
    return Math.floor((intersectionCount / unionCount) * 65536);
}