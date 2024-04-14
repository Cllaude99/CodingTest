function solution(array, commands) {
    var answer = [];
    
    commands.forEach(([start,end,k]) => {
        const arr = array.slice(start-1,end).sort((a,b) => a-b);
        answer.push(arr[k-1]);
    })
    
    return answer;
}