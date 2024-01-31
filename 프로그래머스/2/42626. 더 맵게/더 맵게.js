class Heap {
  nodeList;

  constructor(arr) {
    this.nodeList = arr;
    this.makeHeap();
  }

  makeHeap() {
    for (let i = Math.floor(this.nodeList.length / 2) - 1; i >= 0; i--) {
      this.topDown(i);
    }
  }

  getSmallest() {
    if (this.nodeList.length === 0) {
      return null;
    }
    const rootNode = this.nodeList[0];
    const lastNode = this.nodeList.pop();

    if (this.nodeList.length > 0) {
      this.nodeList[0] = lastNode;
      this.topDown(0);
    }
    return rootNode;
  }

  bottomUp(currentNodeIndex) {
    while (currentNodeIndex > 0) {
      const parentNodeIndex = Math.floor((currentNodeIndex - 1) / 2);
      if (this.nodeList[parentNodeIndex] <= this.nodeList[currentNodeIndex])
        break;

      [this.nodeList[parentNodeIndex], this.nodeList[currentNodeIndex]] = [
        this.nodeList[currentNodeIndex],
        this.nodeList[parentNodeIndex],
      ];
      currentNodeIndex = parentNodeIndex;
    }
  }

  topDown(currentNodeIndex) {
    while (true) {
      let smallestNodeIndex = null;
      const leftChildNodeIndex = currentNodeIndex * 2 + 1;
      const rightChildNodeIndex = currentNodeIndex * 2 + 2;

      if (leftChildNodeIndex < this.nodeList.length) {
        smallestNodeIndex = leftChildNodeIndex;
      }

      if (
        rightChildNodeIndex < this.nodeList.length &&
        this.nodeList[rightChildNodeIndex] < this.nodeList[leftChildNodeIndex]
      ) {
        smallestNodeIndex = rightChildNodeIndex;
      }

      if (
        smallestNodeIndex === null ||
        this.nodeList[currentNodeIndex] <= this.nodeList[smallestNodeIndex]
      )
        break;

      [this.nodeList[currentNodeIndex], this.nodeList[smallestNodeIndex]] = [
        this.nodeList[smallestNodeIndex],
        this.nodeList[currentNodeIndex],
      ];
      currentNodeIndex = smallestNodeIndex;
    }
  }
}

function solution(scoville, K) {
  const heap = new Heap(scoville);
  let answer = 0;

  while (heap.nodeList.length > 1 && heap.nodeList[0] < K) {
    const smallest1 = heap.getSmallest();
    const smallest2 = heap.getSmallest();
    const newScoville = smallest1 + smallest2 * 2;
    heap.nodeList.push(newScoville);
    heap.bottomUp(heap.nodeList.length - 1);
    answer += 1;
  }

  return heap.nodeList[0] >= K ? answer : -1;
}