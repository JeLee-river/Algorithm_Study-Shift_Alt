function solution(skill, skill_trees) {
    const skillImportance = new Map();
    skill.split('').forEach((eachSkill, index) => {
        skillImportance.set(eachSkill, index);
    });

    let answer = 0;
    while(skill_trees.length > 0){
        const importanceList = [];
        const target = skill_trees.pop();
        target.split('').forEach((skills) => {
            const importance = skillImportance.get(skills);
            if(importance !== undefined){
                importanceList.push(importance);
            }
        });

        let isPossible = true;
        if(importanceList.length > 0){
          for (let i = 0; i <= importanceList.length - 1; i++){
            if(importanceList[i] !== i){
                isPossible = false;
                break;
            }
          }
        }
        if(isPossible){
            answer += 1;
        }
    }

    return answer;
}