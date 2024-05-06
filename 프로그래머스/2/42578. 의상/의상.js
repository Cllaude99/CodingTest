/*
    문제 분석
    
    1. 
*/

/*
    문제 설계
    
    1. clothes 배열을 순차적으로 확인해나가며 아래와 같은 과정을 수행한다.
    2. clothes의 한 요소를 cloth라고 할때, 
       cloth[0]의 경우, 의상의 이름 
       cloth[1]의 경우, 의상의 타입을 의미한다.
    3. 따라서 clothes_obj를 참고하여 key값이 cloth[1]인 key가 존재하는 지 확인을 한 후,
       3-1. cloth[1]인 key값이 존재 O
            clothes_obj[cloth[1]].push(cloth[0]) 을 수행하여, 해당 의상의 타입에 해당하는 
            배열에 의상의 이름을 추가한다.
       3-2. cloth[1]인 key값이 존재 X
            clothes_obj[cloth[1]]에 [cloth[0]]을 넣어주어, 해당 의상의 타입에 해당하는 의상을
            배열의 형태로 저장한다.
    4. 구하고자하는 값은 의상의 조합이며 이는 아래와 같이 생각해볼 수 있다.
       4-1. 의상의 종류별로 배열을 확인해 나간다.
       4-2. clothes_obj를 참고하여 의상의 종류에 해당하는 의상의 개수를 확인한다.
       4-3. 총 조합의 개수에 (의상개수 + 1)를 곱한다. (여기서 의상개수에 1을 더해서 곱해주는 이유는
            해당 의상을 고르지 않는 경우도 있기 때문이다.)
       4-4. 총 조합의 개수에서 1을 빼준다. (1을 빼주는 이유는 의상을 모두 안입는 경우는 제외해야 하기 때             문이다)
       4-5. 총 조합의 개수를 리턴한다.
*/
function solution(clothes) {
    var answer = 0;
    
    const clothes_obj = {};
    let cloth_number = 1;
    
    clothes.forEach(([cloth, type]) => {
        if(clothes_obj[type] === undefined){
            clothes_obj[type] = [cloth];
        }else{
            clothes_obj[type].push(cloth);
        }
    });
    
    Object.keys(clothes_obj).forEach((type) => {
        cloth_number *= (clothes_obj[type].length + 1) ;
    })
    
    answer += cloth_number;
    answer -= 1;
    
    return answer;
}


    
