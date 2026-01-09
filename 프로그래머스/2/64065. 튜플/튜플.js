function solution(s) {
    const sArr = s.split('},{');
    // sArr[0] = sArr[0][2];
    // sArr[sArr.length-1] = sArr[sArr.length-1].replaceAll('}','');
    const tuppleArray = sArr.map((str) => {
        const newStr = str.replace(/[{}]/g, '');
        return newStr.split(',');
    });
    
    tuppleArray.sort((prev, next) => prev.length - next.length);
    const newTuppleArray = tuppleArray.flat();
    const tupple = new Set();
    newTuppleArray.forEach((el) => tupple.add(el));
    return Array.from(tupple).map(Number);
}