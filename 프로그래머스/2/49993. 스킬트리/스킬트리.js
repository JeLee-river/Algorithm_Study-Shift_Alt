function solution(skill, skill_trees) {
    const skillMap = new Map();
    for(let i = 0; i < skill.length; i += 1) {
        skillMap.set(skill[i], i);
    }
    
    let answer = 0;
    for(const skillTree of skill_trees) {
        const skillHistory = [];
        let valid = true;

        for(let i = 0; i < skillTree.length; i += 1) {
            const target = skillTree[i];
            if (!skillMap.has(target)){
                continue;
            }

            const index = skillMap.get(target);
            if(index !== skillHistory.length) {
                valid = false;
                break;
            }

            skillHistory.push(index);
        }

        if(valid) {
            answer += 1;
        }
    }

  return answer;
}
