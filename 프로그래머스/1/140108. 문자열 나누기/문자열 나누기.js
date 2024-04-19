function solution(s) {
    var answer = 0;
    
    let splitWords = [];
    let splitWord = s[0];
    let currentWord = undefined;
    let currentWordCount = 0;
    let diffWordCount = 0;
    
    for(let i=0; i<s.length; i++){
        if(currentWord === undefined){
            currentWord = s[i];
        }
        if(s[i] === currentWord){
            currentWordCount += 1;
        }else{
            diffWordCount += 1;
        }
        
        splitWord += s[i];
        
        if(currentWordCount === diffWordCount){
            splitWords.push(splitWord);
            splitWord = '';
            currentWord = undefined;
            currentWordCount = 0;
            diffWordCount = 0;
        }
    }
    
    if(splitWord !== ''){
        splitWords.push(splitWord);
    }
    
    answer = splitWords.length
    
    return answer;
}