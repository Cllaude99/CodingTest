function gcd(x,y){
    if(y === 0) return x;
    else return gcd(y, x%y);
}

function mcd(x,y){
    return (x*y) / gcd(x,y);
}

function solution(n, m) {
    var answer = [];
    
    answer.push(gcd(n,m));
    answer.push(mcd(n,m));
    
    return answer;
}