/* 문제 분석 및 전략 */

/*
    문제에서 구하고자하는 것은 정현이가 원하는 제품을 모두 할인 받을 수 있는 회원등록 날짜의 일수이다.
    
    + 그렇다면, 정현이가 회원등록을 할 수 있는 경우와 없는 경우에 대한 조건을 알아봐야한다.
    + 또한 10일 동안의 회원 자격이 부여되므로, discount의 배열을 순차적으로 확인해 나갈때, 
      현재 참고하고 있는 인덱스로 부터 10개씩 잘라서 회원등록의 조건에 부합한 지 확인해야한다.
    
    1. 회원 등록 X
       + 현재 참고하고 있는 discount배열값부터, 순차적으로 10개의 할인목록을 확인한다.
       + 이때, discountObj 객체에 이름과 수량을 적어나간다.
       + 정현이의 want목록을 참고하여, discountObj 목록에 아래와 같은 조건을 확인한다
       1) 정현이가 사고자 하는 품목이 존재하는지
       2) 수량은 충분히 존재하는지
       이때, 1) 또는 2) 조건을 만족시키지 못하는 경우 회원 등록을 할 수 없다고 판단한다.
    
    2. 회원 등록 O
       1번과정의 1),2)에 대해 위 두 조건을 모두 만족하는 경우 회원등록을 할 수 있다고 판단한다.
*/

function solution(want, number, discount) {
    var answer = 0;
    
    const buy_list = {}; // 정현이가 사고자 하는 품목과 수량 정보
    
    // 정현이의 구매목록을 초기화 하는 과정
    want.forEach((item, index) => {
        buy_list[item] = number[index];
    });
    
    for(let i = 0; i < discount.length - 10 + 1; i++){
        let register = true;
        const discount_list = {};
        discount.slice(i, i+10).forEach((discountItem) => {
            if(discount_list[discountItem] === undefined){
                discount_list[discountItem] = 1;
            }else{
                discount_list[discountItem] += 1;
            }
        });
        
        for(let i=0; i<want.length; i++){
            const item = want[i];
            if(discount_list[item] === undefined ||  discount_list[item] < buy_list[item]){
                register = false;
                break;
            }
        }
        
        if(register){
            answer += 1;
        }
    }
    
    return answer;
}