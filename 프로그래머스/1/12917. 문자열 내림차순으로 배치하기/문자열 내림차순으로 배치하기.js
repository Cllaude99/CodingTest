function solution(s) {
    var answer = '';
    
    const lower_alphabet = "abcdefghijklmnopqrstuvwxyz".split("").reverse().join("");
    const upper_alphabet = lower_alphabet.toUpperCase();
    const alphabet = lower_alphabet + upper_alphabet;
    
    const countArr = new Array(alphabet.length).fill(0);
    
    for(let i=0;i<s.length;i++){
        const idx = alphabet.split("").findIndex((element) => element === s[i]);
        countArr[idx] += 1;
    }
    
    for(let i=0;i<alphabet.length; i++){
        if(countArr[i] > 0){
            for(let j=0;j<countArr[i];j++){
                answer += alphabet[i]
            }
        }
    }
    
    return answer;
}