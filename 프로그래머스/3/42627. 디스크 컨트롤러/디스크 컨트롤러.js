function solution(jobs) {
    const heap = [];
    
    const sortUp = (initIndex) => {
        let targetIndex = initIndex;
        
        while(targetIndex > 0) {
            const parentIndex = Math.ceil(targetIndex/2) - 1;
            const [parentReq, parentTime] = heap[parentIndex];
            const [targetReq, targetTime] = heap[targetIndex];
            
            if(parentTime < targetTime) {
                break;
            }
            
            if(parentTime === targetTime && parentReq <= targetReq) {
                break;
            }
            
            [heap[targetIndex], heap[parentIndex]] = [heap[parentIndex], heap[targetIndex]];
            targetIndex = parentIndex;
        }
    }
    
    const sortDown = (initIndex) => {
        let targetIndex = initIndex;

        while(true) {
            const leftIndex = targetIndex * 2 + 1;
            const rightIndex = targetIndex * 2 + 2;
            let smallerIndex = targetIndex;
            
            if(leftIndex < heap.length && heap[smallerIndex][1] > heap[leftIndex][1]) {
                smallerIndex = leftIndex;
            }
            
            if(leftIndex < heap.length && heap[smallerIndex][1] === heap[leftIndex][1] && heap[smallerIndex][0] > heap[leftIndex][0]) {
                smallerIndex = leftIndex;
            }
            
            if(rightIndex < heap.length && heap[smallerIndex][1] > heap[rightIndex][1]) {
                smallerIndex = rightIndex;
            }
            
            if(rightIndex < heap.length && heap[smallerIndex][1] === heap[rightIndex][1] && heap[smallerIndex][0] > heap[rightIndex][0]) {
                smallerIndex = rightIndex;
            }
            
            if(smallerIndex === targetIndex) {
                break;
            }
            
            [heap[targetIndex], heap[smallerIndex]] = [heap[smallerIndex], heap[targetIndex]];
            targetIndex = smallerIndex;
        }
    }
    
    const push = (job) => {
        heap.push(job);
        sortUp(heap.length - 1);
    }
    
    const pop = () => {
        if(heap.length === 1) return heap.pop();
        const min = heap[0];
        heap[0] = heap.pop();
        sortDown(0);
        return min;
    }
    
    const sortedJobs = [...jobs].sort((a, b) => a[0] - b[0]);
    let time = 0;
    let index = 0;
    let total = 0;
    let count = 0;
    
    while( count < jobs.length) {
        while(index < sortedJobs.length && sortedJobs[index][0] <= time) {
            push(sortedJobs[index]);
            index += 1;
        }
        
        if(heap.length > 0) {
            const [req, workTime] = pop();
            time += workTime;
            total += time - req;
            count += 1;
        } else {
            time = sortedJobs[index][0];
        }
    }
    
    return Math.floor(total/jobs.length);
}