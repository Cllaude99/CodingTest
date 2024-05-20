/*
    문제분석 및 설계
    
    1. 택배 기사님이 원하는 상자 순서를 나타내는 정수 배열 order를 참고하여,
       해당 순서로 상자를 꺼낼 수 있는 지 확인해야 하며, 실을 수 있는 상자의 개수를 확인하고
       이를 반환해야 한다. 
    
    1. 
*/

function solution(order) {
    const TOTAL_BOX_NUMBER = order.length; // 총 상자의 개수
    const sub_container = []; // 보조 컨테이너
    let avaliable_box = 0; // 실을 수 있는 상자의 개수
    let number = 1;
    
    for(let i=0; i<TOTAL_BOX_NUMBER; i++){
        while(number <= order[i]){
            sub_container.push(number);
            number += 1;
        }
        
        if(sub_container.slice(-1)[0] === order[i]){
            sub_container.pop();
            avaliable_box += 1;
        }else{
            break;
        }
    }
    
    return avaliable_box;
}
