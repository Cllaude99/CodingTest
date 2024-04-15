function solution(a, b) {
    var answer = '';
    
    let days = ['SUN','MON','TUE','WED','THU','FRI','SAT'];
    let first_days = ['FRI','MON','TUE','FRI','SUN','WED','FRI','MON','THU','SAT','TUE','THU'];
    
    const start_day = first_days[a-1];
    let day = days.indexOf(start_day);
    
    for(let i=1; i<b; i++){
        day = (day+1)%7;
    }
    
    answer = days[day];
    
    return answer;
}

 