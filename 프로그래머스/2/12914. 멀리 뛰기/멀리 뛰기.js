
function solution(n) {
    var answer = 0;
    const arr = new Array(2001);
    arr[0] = 1;
    arr[1] = 1;
    
    for(let i=2; i<2001; i++){
        arr[i] = (arr[i-2] + arr[i-1]) % 1234567;
    }
    
    return arr[n];
}

