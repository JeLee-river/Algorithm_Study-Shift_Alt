function solution(s){
    const target = s.toLowerCase();
    const counter = new Map();
    counter.set('p', 0);
    counter.set('y', 0);
    
    for (let i = 0; i<=target.length-1; i+=1){
        if(counter.has(target[i])){
            counter.set(target[i], counter.get(target[i]) + 1);
        }
    }

    return (counter.get('p') === counter.get('y'))
}