function solution(numbers) {
    var answer = [];
    
    for(let i=0; i<numbers.length; i++){
        for(let j=i+1; j<numbers.length; j++){
            const value = numbers[i] + numbers[j];
            if(!answer.includes(value)) answer.push(value);
        }
    }
    
    answer.sort((a,b) => a-b);
    
    return answer;
}