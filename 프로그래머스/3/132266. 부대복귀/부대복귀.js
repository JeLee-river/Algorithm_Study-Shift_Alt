function solution(n, roads, sources, destination) {
    const roadMap = new Map();
    
    for (const [node1, node2] of roads) {
        roadMap.set(node1, [...(roadMap.get(node1) ?? []), node2]);
        roadMap.set(node2, [...(roadMap.get(node2) ?? []), node1]);
    }

    const answerMap = new Map([[destination, 0]]);
    const visited = new Set([destination]);
    const queue = [{node: destination, distance: 0}];
    let head = 0;
    while(queue.length > head) {
        const {node, distance} = queue[head++];
        if(sources.includes(node) && !answerMap.has(node)) {
            answerMap.set(node, distance);
        }
        
        const nextList = roadMap.get(node);
        for (const next of nextList) {
            if(!visited.has(next)) {
                visited.add(next);
                queue.push({node: next, distance: distance + 1});
            }
        }
    }
    
    return sources.map((start) => answerMap.get(start) ?? -1);
}