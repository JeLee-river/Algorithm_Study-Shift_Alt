function solution(fees, records) {
    const record = new Map();
    
    records.forEach((rec) => {
        const [time, num, timelineType] = rec.split(' ');
        const current = record.get(num) ?? [];
        const [hour, min] = time.split(':').map(Number);
        const totalTime = min + 60 * hour;
        record.set(num, [...current, totalTime]);
    });
    
    const recordArray = Array.from(record);
    recordArray.sort((prev, next) => prev[0].localeCompare(next[0]));
    
    return recordArray.map(([num, times]) => {
        let totalTimes = 0;
        for (let i = 0; i <= times.length - 1; i += 2) {
            if(i + 1 <= times.length - 1) {
                totalTimes += (times[i + 1] - times[i]);
            } else {
                totalTimes += (23 * 60 + 59 - times[i]);
            }
        }
        
        return totalTimes <= fees[0] ? fees[1] : fees[1] + Math.ceil((totalTimes - fees[0])/fees[2]) * fees[3]
     });
}