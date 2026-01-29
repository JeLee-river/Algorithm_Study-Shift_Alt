function solution(order) {
    const store = [];
    const package = Array.from({length: order.length}, (_, index) => order.length - index);
    let answer = 0;
    for (let i = 0; i <= order.length - 1; i += 1) {
        const target = order[i];
        while (package[package.length - 1] < target) {
            const last = package.pop();
            store.push(last);
        }
        
        if(package[package.length - 1] === target) {
            package.pop();
            answer += 1;
        } else if(store[store.length - 1] === target) {
            store.pop();
            answer += 1;
        } else {
            return answer;
        }
    }
    
    return answer;
}