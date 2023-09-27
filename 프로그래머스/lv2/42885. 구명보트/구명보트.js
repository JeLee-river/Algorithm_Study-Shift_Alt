function solution(people, limit) {
    people.sort((a,b) => a-b);
    let boartCount = 0;
    let lightestIdx = 0;
    let heaviestIdx = people.length-1;
    while (lightestIdx < heaviestIdx) {
        if(people[lightestIdx] + people[heaviestIdx] <= limit) {
            ++lightestIdx;
        }
        --heaviestIdx;
        ++boartCount;
    };
    if (lightestIdx === heaviestIdx) return ++boartCount;
    return boartCount;
}