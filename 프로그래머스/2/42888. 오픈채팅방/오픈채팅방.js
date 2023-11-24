function solution(record) {
    const enterList = new Map();
    const leaveList = new Map();
    const nickNames = new Map();
    
    record.forEach((rec) => {
        const [type, id, nickname] = rec.split(' ');
        const totalLength = enterList.size + leaveList.size;
        
        if(type === 'Enter'){
            enterList.set(totalLength, id);
            nickNames.set(id, nickname);
        }
        if(type === 'Leave'){
            leaveList.set(totalLength, id);
        }
        if(type === 'Change'){
            nickNames.set(id, nickname);
        }
    });

    const historyList = Array.from({length: enterList.size + leaveList.size}, () => '');
    const printTemplate = (nickname) => new Map([
        ['enter', `${nickname}님이 들어왔습니다.`],
        ['leave', `${nickname}님이 나갔습니다.`]
    ]);

    const answer = historyList.map((history, idx) => {
        const id = enterList.get(idx) ?? leaveList.get(idx);
        const nickname = nickNames.get(id);
        const action = enterList.has(idx) ? 'enter' : 'leave';
        return printTemplate(nickname).get(action);
    });
    
    return answer;
}