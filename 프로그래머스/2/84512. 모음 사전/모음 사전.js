/*
    문제 설계
    
    1. 
*/

function solution(word) {
    const vowel = ["A", "E", "I", "O", "U"];
    const dic = [];
    
    vowel.forEach((v) => DFS(v, dic, vowel));
    
    return dic.findIndex((element) => element === word) + 1;
}

function DFS(v, dic, vowel){
    if(v.length <= 5){
        dic.push(v);
        
        for(let i=0; i<5; i++){
            DFS(v+vowel[i], dic, vowel);
        }
    }
}
