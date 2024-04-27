/* 문제 접근 */

/*
    1. 선물을 주고 받은 수가 같은 경우 (주고 받은 기록이 없는 경우는 둘다 받은 수가 0)
    1-1. A의 선물지수, B의 선물지수를 구한다 (선물지수 = 친구들에게 준 선물 - 친구들에게 받은 선물)
    1-2. A의 선물지수 === B의 선물지수 인경우 다음달에 선물을 주고 받지 않는다
    1-2. A,B중 선물지수가 큰 사람이 선물지수가 작은 사람에게 선물을 준다.
    
    2. 선물을 주고 받은 수가 다른 경우
    2-1. 선물을 많이 준 사람이 다음달에 선물을 하나 받는다
    
    3. 위와 같은 과정을 통해 모든 사람에 대해 누가 가장 선물을 많이 받을지를 계산한다
*/
function solution(friends, gifts) {
    var answer = 0;
    
    let give_present_obj = {}; // 선물을 준 목록 A: ['B','C'] 는 A는 B,C에게 선물을 주었다는 것을 의미
    let get_present_obg = {}; // 선물을 받은 목록 A: ['B','C'] 는 A는 B,C에게 선물을 받았다는 것을 의미
    let present_count = {} // 선물 지표에 대한 목록
    let next_month_get_present = {}; // 사람별로 다음달에 받을 선물에 대한 개수 목록
    let max_get_present_num = 0;
    
    // 선물을 준 목록, 선물을 받은 목록, 다음달에 선물 받을 개수 목록을 초기화 하는 과정
    friends.forEach((friend) => {
        give_present_obj[friend] = [];
        get_present_obg[friend] = [];
        next_month_get_present[friend] = 0;
    })
    
    // gifts를 참고하여 선물을 준 목록, 선물을 받은 목록을 업데이트 하는 과정
    gifts.forEach((element) => {
        const [from, to] = element.split(" ");
        give_present_obj[from].push(to);
        get_present_obg[to].push(from);
    });
    
    // give_present_obj, get_present_obg를 참고하여 선물지수 목록을 초기화 한다. 
    friends.forEach((friend) => {
        present_count[friend] = give_present_obj[friend].length - get_present_obg[friend].length;
    });
    
    friends.forEach((friend) => {
        let get_present_num = 0;
        const others = friends.filter((f) => f !== friend);
        others.forEach((other) => {
            const friend_to_other = give_present_obj[friend].filter((f) => f === other).length;
            const other_to_friend = give_present_obj[other].filter((f) => f === friend).length;
            
            if(friend_to_other === other_to_friend){
                if(present_count[friend] !== present_count[other]){
                    if(present_count[friend] > present_count[other]){
                        next_month_get_present[friend] += 1;                        
                    }else{
                        next_month_get_present[other] += 1;
                    }
                }
            }else{
                if(friend_to_other > other_to_friend){
                    next_month_get_present[friend] += 1;                    
                }else{
                    next_month_get_present[other] += 1;
                }
            }
        });
    });
    
    friends.forEach((friend) => {
        max_get_present_num = max_get_present_num < next_month_get_present[friend] ? next_month_get_present[friend] : max_get_present_num;
    })
    
    answer = max_get_present_num / 2;
    
    return answer;
}