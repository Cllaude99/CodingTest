function solution(s) {
    var answer = [];
    const words = s.split(" ");
  
    words.forEach((word) => {
        let change_word = ""
        for(let i=0;i<word.length; i++){
            if(i%2 === 0) change_word += word[i].toUpperCase();
            else change_word += word[i].toLowerCase();
        }
        answer.push(change_word);
    })
    
    return answer.join(" ");
}