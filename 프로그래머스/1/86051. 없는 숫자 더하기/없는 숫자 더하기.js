function solution(numbers) {
    var answer = 0;
    let exists = new Array(10).fill(false);
    
    numbers.forEach((element) => exists[element] = true);
    
    exists.forEach((element, index) => {
        if(!element) answer += index;
    })
    
    return answer;
}