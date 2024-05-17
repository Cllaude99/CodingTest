/*
    문제분석 및 설계
    
    1. skill_trees를 순차적으로 확인해 나가면서, 해당 스킬이 선행 스킬 순서를 올바르게 지켰는지 확인하고,
       올바르게 지킨 경우에만 가능한 스킬트리 개수를 1증가하는 과정을 수행하면 된다.
     
    1. 스킬트리에 있는 스킬들이 선행 스킬 순서를 올바르게 지켰는지는 다음과 같이 확인할 수 있다.
    2. 스킬트리에 있는 스킬을 앞에서 부터 확인해 나간다.
    2-1. 해당 스킬이 skill에 존재하는 경우, skill에 맨 앞에 있는 값과 동일한 지 확인한다.
    2-1-a. 만약 맨 앞에 있는 값과 동일한 경우, skill의 맨 앞에 있는 값을 shift()해준다.
    2-1-b. 만약 맨 앞에 있는 값과 다른 경우, 올바른 순서가 아니므로, 2번 과정으로 돌아가 다음 스킬트리 값을 
           참고한다.
    2-2. 해당 스킬이 skill에 존재하지 않는 경우, 스킬트리의 다음 스킬로 넘어간다.
    
    3. 해당 스킬 트리의 스킬을 끝까지 확인하였는데도 문제가 없었다면, 가능한 스킬 트리 개수를 1증가한다.
*/
function solution(skill, skill_trees) {
    var avaliable = 0; // 가능한 스킬트리 개수
    const skill_sequence = skill.split(''); // 스킬의 순서
    
    skill_trees.forEach((tree) => {
        const sequence = JSON.parse(JSON.stringify(skill_sequence));
        const sTree = tree.split('');
        let success = true;
        
        for(let i=0; i<sTree.length; i++){
            if(sequence.length === 0) break;
            if(sequence.includes(sTree[i])){
                if(sequence[0] === sTree[i]){
                    sequence.shift();
                }else{
                    success = false;
                    break;
                }
            }
        }
        
        if(success){
            avaliable += 1;
        }
    });
    
    return avaliable;
}