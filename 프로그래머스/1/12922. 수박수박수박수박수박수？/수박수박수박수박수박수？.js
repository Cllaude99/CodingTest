function solution(n) {
    var answer = '';
    let word = ['박','수'];
    
    for(let i=1;i<=n;i++){
        answer += word[i%2];
    }
    return answer;
}