function solution(s) {
    var answer = [];
    const alphabet = "abcdefghijklmnopqrstuvwxyz".split("");
    const visited = new Array(26).fill(-1);
    
    for(let i=0; i<s.length; i++){
        const idx = alphabet.findIndex((element) => element === s[i]);
        if(visited[idx] === -1){
            answer.push(-1);
            visited[idx] = i;
        }else{
            answer.push(i-visited[idx]);
            visited[idx] = i;
        }
    }
    
    return answer;
}
