function solution(n, words) {
    const checkDuplicationHash = new Map();
    let lastWord = words[0][words[0].length-1];
    checkDuplicationHash.set(words[0], 1);
    
    for (let i = 1; i <= words.length - 1; i++) {
        const targetWord = words[i];
        if (checkDuplicationHash.has(targetWord) || lastWord !== targetWord[0]) {
            return [i % n + 1, parseInt(i / n) + 1];
        }
        if(lastWord !== targetWord[0]){
            return [lastWord,targetWord[0]];
        }
        checkDuplicationHash.set(targetWord, 1);
        lastWord = targetWord[targetWord.length-1];
    }
    return [0,0]
}