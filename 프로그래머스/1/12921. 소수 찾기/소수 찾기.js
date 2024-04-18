function solution(n) {
    var answer = 0;
    const isPrime = new Array(n+1).fill(true);
    
    isPrime[0] = false;
    isPrime[1] = false;
    
    for(let i=2; i<= Math.sqrt(n); i++){
        if(!isPrime[i]) continue;
        for(let j=2*i; j<=n; j+=i){
            isPrime[j] = false;
        }
    }
    
    answer = isPrime.filter((element) => element).length;
    
    return answer;
}