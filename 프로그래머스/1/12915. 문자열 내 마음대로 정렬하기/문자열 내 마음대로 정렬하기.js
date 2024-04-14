function solution(strings, n) {
    var answer = [];
    let alphabet = "abcdefghijklmnopqrstuvwxyz".split("");
    
    strings.sort();
    
    strings.sort((a,b) => alphabet.indexOf(a[n]) - alphabet.indexOf(b[n]));
    
    
    return strings;
}