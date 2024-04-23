function solution(n, wires) {
    const linkedTable = new Map();
    wires.forEach((pair) => {
        pair.forEach((wire, index) => {
            const linkedArray = linkedTable.get(wire) ?? [];
            linkedArray.push(pair[1-index]);
            linkedTable.set(wire, linkedArray);  
        });
    });
    
    const answer = [];
    
    for (let i = 1; i <= n; i+=1){
        const linkedWires = linkedTable.get(i);
        
        for (let wireIndex = 0; wireIndex <= linkedWires.length-1; wireIndex+=1){
            const tree = new Map(linkedTable);
            const disconnected1 = linkedWires.filter((wire) => wire !== linkedWires[wireIndex]);
            
            const disconnectedWire = linkedTable.get(linkedWires[wireIndex]);
            const disConnected2 = disconnectedWire.filter((wire) => wire !== i);

            tree.set(i, disconnected1);
            tree.set(linkedWires[wireIndex], disConnected2);
            
            const visited = new Set();
            const queue = [1];

            while(queue.length > 0){
                const currentWire = queue.shift();
                if(!visited.has(currentWire)){
                    visited.add(currentWire);
                    const linkedWires = tree.get(currentWire);
                    linkedWires.forEach((wire) => {
                        queue.push(wire);
                    });
                }
            }
            answer.push(visited.size);
        }
    }
    
    return Math.min(...answer.map((wires) => Math.abs(n - 2 * wires)));
}