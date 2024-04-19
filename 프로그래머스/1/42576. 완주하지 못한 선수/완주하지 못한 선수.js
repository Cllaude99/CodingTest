function solution(participant, completion) {
    var answer = '';
    
    const participantList = {};
    
    participant.forEach((person) => {
        if(participantList[person] === undefined){
            participantList[person] = 1;
        }else{
            participantList[person] += 1;
        }
    });
    
    completion.forEach((person) => {
        participantList[person] -= 1;
    })
    
    for(let i=0; i<participant.length; i++){
        if(participantList[participant[i]] !== 0){
            answer = participant[i];
            break;
        }
    }
    
    return answer;
}