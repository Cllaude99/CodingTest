/*
    문제 설계
    
    1. 
*/

function solution(k, dungeons) {
    const N = dungeons.length;
    let visited = new Array(N).fill(false);
    let answer = [];
    
    for(let i=0; i<N; i++){
        visited[i] = true;
        DFS([i], N, dungeons, visited, answer, k);
        visited[i] = false;
    }
    
    return Math.max(...answer);
}

function check(seq, dungeons, k){
    let current_piro = k;
    let number = 0;
    
    for(let i=0; i<seq.length; i++){
        if(dungeons[seq[i]][0] > k) break;
        k -= dungeons[seq[i]][1];
        number += 1;
    }
    return number;
}

function DFS(seq, N, dungeons, visited, answer, k){
    if(seq.length === N){
        const result = check(seq, dungeons, k);
        answer.push(result);
    }else{
        for(let i=0; i<N; i++){
            if(!visited[i]){
                visited[i] = true;
                const copy_seq = JSON.parse(JSON.stringify(seq));
                copy_seq.push(i);
                DFS(copy_seq, N, dungeons, visited, answer, k);
                visited[i] = false;
            }
        }
    }
}