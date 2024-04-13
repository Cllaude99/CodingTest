function change_to_3(number){
    const arr = [];
    while(number > 0){
        arr.push(number % 3);
        number = Math.floor(number/3);
    }
    return arr.reverse().map(Number);
}

function solution(n) {
    var answer = 0;
    const n_to_3 = change_to_3(n);
    const n_to_3_reverse = n_to_3.reverse();
    let count = 3 ** (n_to_3_reverse.length - 1);
    
    n_to_3_reverse.forEach((element) => {
        answer += element * count;
        count /= 3;
    })
    return answer;
}