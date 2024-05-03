function solution(citations) {
    let answer = 0;
    var h = 0;
    
    const max_value = Math.max(...citations);
    
    while(h<=max_value){
        const first_con = citations.filter((element) => element >= h).length >= h;
        const second_con = citations.filter((element) => element < h).length <= h;
        
        if(first_con && second_con){
            answer = answer < h ? h : answer;
        }
        h += 1;
    }
    
    
    return answer;
}