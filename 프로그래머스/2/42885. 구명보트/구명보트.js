function solution(people, limit) {
    people.sort((prev, next) => next - prev);
    
    const checked = new Set();
    let answer = 0;
    let lightestIndex = people.length - 1;
    
    for (let i = 0; i <= people.length - 1; i += 1) {
        const heaviest = people[i];
        const lightest = people[lightestIndex];
        
        if (heaviest + lightest <= limit) {
            checked.add(lightestIndex);
            lightestIndex -= 1;
        }
        checked.add(i);
        answer += 1;
        
        if(checked.size === people.length) {
            return answer;
        }
    }
}