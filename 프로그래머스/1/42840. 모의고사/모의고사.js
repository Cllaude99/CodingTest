function solution(answers) {
    var answer = [];
    let result = [0,0,0];
    
    const person = [[1,2,3,4,5],[2,1,2,3,2,4,2,5],[3,3,1,1,2,2,4,4,5,5]];
    const total_num = [5,8,10];
    
    for(let i=0; i<answers.length; i++){
        for(let j=0; j<3; j++){
            if(answers[i] === person[j][i%total_num[j]]){
                result[j] += 1;
            }
        }
    }
    
    let max_value = Math.max(...result);
    result.forEach((element,index) => {
        if(element === max_value){
            answer.push(index+1);
        }
    })
    
    return answer;
}