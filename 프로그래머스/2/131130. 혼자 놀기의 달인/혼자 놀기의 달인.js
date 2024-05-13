function solution(cards) {
    const groupNumber = [];
    
    const openBox = (card, totalCount, visited) => {
        if(!visited[card-1]){
            visited[card-1] = true;
            openBox(cards[card-1], ++totalCount, visited);
        } else {
            groupNumber.push(totalCount);
        }
    }
    
    const visited = Array.from({length: cards.length}, () => false);
    cards.forEach((card, index) => {
        openBox(card, 0, visited);
    });
    
    groupNumber.sort((prev, next) => prev - next);
    const maxNumber = groupNumber.pop();
    if(maxNumber === cards.length) return 0;
    
    const secondNumber = groupNumber.pop();
    return maxNumber * secondNumber;
}