function solution(elements) {
    const totalSum = [...elements];
    const copiedElements = [...elements];
    for (let i = 0; i<=elements.length-1; i++) {
        copiedElements.slice(i).reduce((acc, cur) => {
            totalSum.push(acc+cur);
            return acc+cur;
        },0);
        copiedElements.push(elements[i]);
    }
    const answer = new Set(totalSum);
    return Array.from(answer).length;
}