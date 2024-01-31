function solution(participant, completion) {
    const registered = new Map();
    completion.forEach((person) => {
        registered.set(person, (registered.get(person) ?? 0) + 1);
    })

    while(participant.length > 0){
        const target = participant.pop();
        const registeredCount = registered.get(target);
        if(!registered.has(target)){
            return target;
        }
        if(registeredCount === 1) registered.delete(target);
        if(registeredCount > 1) registered.set(target, registeredCount - 1);
    }
}