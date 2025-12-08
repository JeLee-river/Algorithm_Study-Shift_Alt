function solution(k, tangerine) {
    const tangerineTable = new Map();
    
    tangerine.forEach((t) => {
        tangerineTable.set(t, (tangerineTable.get(t) ?? 0) + 1);
    });
    
    const tableArray = Array.from(tangerineTable.values());
    tableArray.sort((prev, next) => prev - next);

    let totalCount = 0;
    while(totalCount < k) {
        const target = tableArray.pop();
        totalCount += target;
    }
    
    return tangerineTable.size - tableArray.length;
}