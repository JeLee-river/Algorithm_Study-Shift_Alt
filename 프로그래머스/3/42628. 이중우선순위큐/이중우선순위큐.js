function solution(operations) {
    let minHeap = [];
    let maxHeap = [];
    const totalMap = new Map();
    const maxCompare = (a, b) => a > b;
    const minCompare = (a, b) => a < b;
    
    const sortUp = (initIndex, heap, isHigher) => {
        let targetIndex = initIndex;
        
        while(targetIndex > 0) {
            const parentIndex = Math.floor((targetIndex - 1)/2);
            if (!isHigher(heap[targetIndex], heap[parentIndex])) break;
            
            [heap[parentIndex], heap[targetIndex]] = [heap[targetIndex], heap[parentIndex]];
            targetIndex = parentIndex;
        }
    }
    
    const sortDown = (initIndex, heap, isHigher) => {
        let targetIndex = initIndex;

        while(true) {
            const leftIndex = targetIndex * 2 + 1;
            const rightIndex = targetIndex * 2 + 2;
            let largerIndex = targetIndex;

            if (leftIndex < heap.length && isHigher(heap[leftIndex], heap[largerIndex])) {
                largerIndex = leftIndex;
            }

            if (rightIndex < heap.length && isHigher(heap[rightIndex], heap[largerIndex])) {
                largerIndex = rightIndex;
            }

            if (largerIndex === targetIndex) {
                break;
            }

            [heap[targetIndex], heap[largerIndex]] = [heap[largerIndex], heap[targetIndex]];
            targetIndex = largerIndex;
        }
    }
    
    const remove = (heap, isHigher) => {
        if(heap.length === 0) return;
        if(heap.length === 1) {
            return heap.pop();
        }
        
        const removedNum = heap[0];
        heap[0] = heap.pop();
        sortDown(0, heap, isHigher);
        return removedNum;
    }
    
    const insert = (num, heap, isHigher) => {
        heap.push(num);
        sortUp(heap.length - 1, heap, isHigher);
    }
    
    const clean = (heap, isHigher) => {
        while (heap.length > 0) {
            const top = heap[0];
            if ((totalMap.get(top) ?? 0) > 0) break;
            remove(heap, isHigher);
        }
    };
    
    operations.forEach((el) => {
        const [action, numString] = el.split(' ');
        const num = Number(numString);
        if(action === 'I') {
            totalMap.set(num, (totalMap.get(num) ?? 0) + 1);
            insert(num, minHeap, minCompare);
            insert(num, maxHeap, maxCompare);            
        } else {
            if(num === 1) {
                clean(maxHeap, maxCompare);
                const removedNum = remove(maxHeap, maxCompare);
            
                if(removedNum) {
                    totalMap.set(removedNum, totalMap.get(removedNum) - 1);
                }
            } else {
                clean(minHeap, minCompare);
                const removedNum = remove(minHeap, minCompare);
                
                if(removedNum !== undefined) {
                    totalMap.set(removedNum, totalMap.get(removedNum) - 1);
                }
            }
        }
    });
    
    clean(maxHeap, maxCompare);
    clean(minHeap, minCompare);
    
    return maxHeap.length === 0 || minHeap.length === 0 ? [0, 0] : [maxHeap[0], minHeap[0]];
}