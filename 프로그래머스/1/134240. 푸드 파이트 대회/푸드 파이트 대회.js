function solution(food) {
    var answer = '';
    let first_person = [];
    
    for(let i=1; i<food.length; i++){
        const value = Math.floor(food[i] / 2);
        if(value !== 0){
            for(let j=0; j<value; j++) first_person.push(i);
        }
    }
    answer = first_person.join("") + "0" + first_person.reverse().join("");
    
    return answer;
}