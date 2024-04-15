function solution(name, yearning, photo) {
    var answer = [];
    let missing = {};
    
    name.forEach((person, index) => {
        missing[person] = yearning[index];
    })
    
    
    photo.forEach((names) => {
        let missingScore = 0;
        names.forEach((person) => {
            if(missing[person] !== undefined) missingScore += missing[person];
        })
        answer.push(missingScore);
    })
    
    return answer;
}