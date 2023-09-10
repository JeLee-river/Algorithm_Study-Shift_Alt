from collections import defaultdict

def solution(nums):
    pocketmonCollection = defaultdict(int)
    for pocketmon in nums:
        pocketmonCollection[pocketmon]+=1
        
    if len(pocketmonCollection)>=len(nums)/2:
        return len(nums)/2
    return len(pocketmonCollection)