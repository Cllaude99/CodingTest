function solution(s, skip, index) {
    var answer = '';
    
    let alphabet = 'abcdefghijklmnopqrstuvwxyz'.split("");
    
    skip.split("").forEach((element) => {
        alphabet = alphabet.filter((word) => word !== element);
    })
    
    for(let i=0; i<s.length; i++){
        let idx = alphabet.findIndex((word) => word === s[i]);
        idx = (idx + index) % alphabet.length;
        answer += alphabet[idx];
    }
    
    return answer;
}