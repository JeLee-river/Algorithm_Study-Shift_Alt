function solution(n, edge) {    
    const depthList = Array.from({length: n + 1}, () => -1);
    const queue = [{node: 1}];
    let index = 0;
    
    depthList[1] = 0;
    while (queue.length > index) {
        const {node} = queue[index];
        
        for (const [node1, node2] of edge) {
            if(node1 === node && depthList[node2] === -1) {
                depthList[node2] = depthList[node1] + 1;
                queue.push({node: node2});
            } else if(node2 === node && depthList[node1] === -1) {
                depthList[node1] = depthList[node2] + 1;
                queue.push({node: node1});
            }
        }
        
        index += 1;
    }
    
    const maxDepth = Math.max(...depthList);
    return depthList.filter((depth) => depth === maxDepth).length;
}