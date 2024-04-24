function solution(m, musicinfos) {
    const musicTable = new Map();
    
    const timeCalculator = (time) => {
        const [hour, min] = time.split(':');
        return Number(hour) * 60 + Number(min);
    }
    
    const splitNote = (melodyString) => {
        const melodyArray = [];
        melodyString.split('').forEach((note) => {
            let currentNote = note;
            if(note === '#'){
                const lastNote = melodyArray.pop();
                currentNote = lastNote + note;
            }
            
            melodyArray.push(currentNote);
        });
        
        return melodyArray;
    }
    
    musicinfos.forEach((info) => {
        const [start, end, name, melody] = info.split(',');
        const playTime = timeCalculator(end) - timeCalculator(start);
        const melodyArray = splitNote(melody);
        let playedMelody = [];
        
        if(melodyArray.length >= playTime){
            playedMelody = melodyArray.slice(0, playTime);
        } else {
            const repeatTimes = Math.floor(playTime/melodyArray.length);
            const over = playTime % melodyArray.length;
            const repeatMelodyString = melodyArray.join('').repeat(repeatTimes);
            const repeatMelodyArray = splitNote(repeatMelodyString);
            
            playedMelody = repeatMelodyArray.concat(...melodyArray.slice(0, over));
        }
        
        musicTable.set(name, {playedMelody, playTime});
    });

    const answer = [];
    musicTable.forEach(({playedMelody, playTime}, name) => {
        const mArray = splitNote(m);
        
        for (let i = 0; i <= playedMelody.length - mArray.length; i+=1){
            const targetString = playedMelody.slice(i, i + mArray.length).join('');
            if(targetString === m){
                answer.push({playedMelody, playTime, name});
            }
        }
    });
    
    if(answer.length === 0) return '(None)';
    if(answer.length === 1) return answer[0]['name'];

    answer.sort((prev, next) => {
        if(prev['playTime'] !== next['playTime']){
            return next['playTime'] - prev['playTime'];
        }
    });

    return answer[0]['name'];
}