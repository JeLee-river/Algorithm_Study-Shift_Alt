function solution(dirs) {
    const visitedLocation = new Map();
    const movement = new Map([['U', '0,1'], ['L', '-1,0'], ['R', '1,0'], ['D', '0,-1']]);
    const road = dirs.split('');
    let currentLocation = [0, 0];
    let answer = 0;

    for (let direction of road) {
        const move = movement.get(direction).split(',').map(Number);
        const newLocation = currentLocation.map((loc, idx) => loc + move[idx]);
        
        if (!isValidLocation(newLocation)) {
            continue;
        }

        const movementKey1 = `${newLocation.join(',')},${currentLocation.join(',')}`;
        const movementKey2 = `${currentLocation.join(',')},${newLocation.join(',')}`;
        
        if (!visitedLocation.has(movementKey1) && !visitedLocation.has(movementKey2)) {
            visitedLocation.set(movementKey1, 1);
            visitedLocation.set(movementKey2, 1);
            answer += 1;
        }

        currentLocation = newLocation;
    }

    return answer;
}

function isValidLocation(location) {
    return location.every(coord => coord >= -5 && coord <= 5);
}
