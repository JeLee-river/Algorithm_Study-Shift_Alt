function solution(citations) {
    const sortedCitations = citations.sort((a,b) => b-a);
    for (let i = 0; i<=sortedCitations.length-1; i++) {
        if(sortedCitations[i] < i+1) {
            return i;
        }
    }
    return sortedCitations.length;
}