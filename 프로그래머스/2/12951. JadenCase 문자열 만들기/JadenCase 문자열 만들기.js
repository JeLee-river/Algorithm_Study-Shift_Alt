function solution(s) {
    const sentance = s.split(' ');
    const parsed = sentance.map((words) => {
        if(!words) return '';
        
        const [firstWord, ...rest] = words.split('').map((word) => word.toLowerCase());
        if(Number.isNaN(firstWord)) return words;
        return [firstWord.toUpperCase(), ...rest].join('');
    });
    
    return parsed.join(' ');
}