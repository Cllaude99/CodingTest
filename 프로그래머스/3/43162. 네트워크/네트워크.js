function find(arr, num){
    if(arr[num] === num) return num;
    else return find(arr, arr[num]);
}

function union(arr, a, b){
    arr[find(b)] = find(a);
    return arr;
}

function solution(n, computers) {
    let answer = new Set();
    
    let arr = Array.from({length: n}, (_, idx) => idx);
    
    computers.forEach((links, i) => {
        links.forEach((c, j) => {
            if(i !== j && c === 1){              
                arr[find(arr, j)] = find(arr, i);
            }
        });
    });

    for(let i=0; i<n; i++){
        answer.add(find(arr, i));
    }
    
    return answer.size;
}