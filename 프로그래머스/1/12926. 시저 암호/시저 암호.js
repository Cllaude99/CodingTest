function solution(s, n) {
    var answer = '';
    let lowwer_alphabet = "abcdefghijklmnopqrstuvwxyz";
    let upper_alphabet = lowwer_alphabet.toUpperCase();
    
    let lowwer_alphabet_arr = lowwer_alphabet.split("");
    let upper_alphabet_arr = upper_alphabet.split("");
    
    for(let i=0;i<s.length;i++){
        let idx1 = lowwer_alphabet_arr.findIndex((element) => element === s[i]);
        let idx2 = upper_alphabet_arr.findIndex((element) => element === s[i]);
        if(idx1 === -1 && idx2 === -1) answer += s[i];
        else if(idx1 !== -1){
            answer += lowwer_alphabet[(idx1+n)%26];
        }else if(idx2 !== -1){
            answer += upper_alphabet[(idx2+n) % 26];
        }
    }
    
    return answer;
}