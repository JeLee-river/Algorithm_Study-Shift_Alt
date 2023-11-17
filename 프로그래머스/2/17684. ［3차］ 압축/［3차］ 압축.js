function solution(msg) {
    const dictionary = new Map();
    const defaultElement = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    defaultElement.split('').forEach((str,idx) => dictionary.set(str,idx+1));
    const answer = [];
    
    let first = 0;
    let last = 1;
    while(last <= msg.length) {
        const target = msg.slice(first, last);
        const nextTarget = msg.slice(first, last + 1);
        
        if(dictionary.has(nextTarget)){
            last += 1;
            continue;
        }
        answer.push(dictionary.get(target));
        dictionary.set(nextTarget, dictionary.size + 1);
        first = last;
        last = first + 1;
    }
    
    answer.push(dictionary.get(msg.slice(first, last-1)));
    return answer;
}