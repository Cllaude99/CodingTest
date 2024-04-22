function getCharacter(characteristic, first, second, answer){
    if(characteristic[first] !== characteristic[second]){
        return characteristic[first] < characteristic[second] ? second : first;
    }   
    return first;
}

function solution(survey, choices) {
    var answer = '';
    let characteristic = {
        'R': 0,
        'T': 0,
        'C': 0,
        'F': 0,
        'J': 0,
        'M': 0,
        'A': 0,
        'N': 0,
    }
    
    survey.forEach(([first, second],index) => {
        const value = choices[index] - 4;
        if(value < 0){
            characteristic[first] += -value;
        }else if(value > 0){
            characteristic[second] += value;
        }
    })
    
    const first_target = getCharacter(characteristic,'R','T');
    const second_target = getCharacter(characteristic, 'C','F');
    const third_target = getCharacter(characteristic, 'J','M');
    const fourth_target = getCharacter(characteristic, 'A','N');
    
    answer += first_target;
    answer += second_target;
    answer += third_target;
    answer += fourth_target;
    
    return answer;
}

// 1. choice-4의 값을 통해 판별
// 1-1. choice-4값이 음수인 경우 첫번째 문자 유형
// 1-2. choice-4값이 양수인 경우 두번째 문자 유형
// 1-3. choice-4값이 0인 경우 계산하지 않음