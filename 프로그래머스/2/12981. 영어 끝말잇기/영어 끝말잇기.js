function solution(n, words) {
    const history = new Set([words[0]]);
    let last = words[0];
    
    const determineEliminated = (word) => {
        const isDuplicated = history.has(word);
        const isValid = last[last.length - 1] === word[0];
        return !isDuplicated && isValid;
    }
    
    for (let i = 1; i <= words.length - 1; i += 1) {
        if (!determineEliminated(words[i])) {
            return [(i % n) + 1, Math.floor(i / n) + 1];
        }

        history.add(words[i]);
        last = words[i];
    }
    
    return [0, 0];
}