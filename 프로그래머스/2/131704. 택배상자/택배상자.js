function solution(order) {
    const truck=[];
    const newContainer = [];
    const container = [];
    const newOrder = [];
    
    for (let i = order.length; i >= 1; i--){
        container.push(i);
        newOrder.push(order[i-1]);
    }
    
    while(newOrder.length > 0){
        const target = newOrder.pop();
        const package = container.pop();
        const storedPackage = newContainer.pop();
        
        if(target === package){
            truck.push(package);
            newContainer.push(storedPackage);
            continue;
        } 
        
        if(target === storedPackage){
            truck.push(storedPackage);
            container.push(package);
            continue;
        }
        
        if(container.length === 0){
            break;
        }
        newOrder.push(target);
        newContainer.push(storedPackage);
        newContainer.push(package);
    }
    return truck.length;
}