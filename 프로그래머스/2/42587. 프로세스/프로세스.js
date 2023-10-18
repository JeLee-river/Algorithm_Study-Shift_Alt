function solution(priorities, location) {
    const prioritiesTable = new Map(priorities.entries());
    const prioritiesCouple = priorities.entries();
    const checkedPriorities = [];
    let targetPriorities = [...prioritiesCouple];
    
    while (prioritiesTable.size >= 1) {
        const restPriorities = Array.from(prioritiesTable.values());
        let maxPriorities = Math.max(...restPriorities);
        const targetPriority = targetPriorities[0];
        targetPriorities = targetPriorities.slice(1);
        if(targetPriority[1] < maxPriorities) {
            targetPriorities.push(targetPriority);
            continue;
        }
        checkedPriorities.push(targetPriority);
        prioritiesTable.delete(targetPriority[0]);
    }
    
    return checkedPriorities.findIndex((priority) => priority[0] === location) + 1;
}