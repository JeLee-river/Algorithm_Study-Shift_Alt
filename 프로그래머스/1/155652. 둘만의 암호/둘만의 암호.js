function solution(s, skip, index) {
    const totalWords = 'abcdefghijklmnopqrstuvwxyz'.split('');
    
    skip.split('').forEach((str) => {
        const skipIndex = totalWords.indexOf(str);
        totalWords.splice(skipIndex, 1);
    });

    const newWords = s.split('').map((str) => {
        const currentIndex = totalWords.indexOf(str);
        const newIndex = (currentIndex + index) % totalWords.length;
        return totalWords[newIndex];
    });
    
    return newWords.join('');
}