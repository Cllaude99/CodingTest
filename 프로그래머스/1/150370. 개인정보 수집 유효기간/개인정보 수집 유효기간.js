function is_valid_date(today, startDate, termDate){
    today = today.split(".").join('');
    let [start_year, start_month, start_day] = startDate.split(".").map(Number);
    const increase_year = Math.floor(termDate / 12);
    const increase_month = Math.floor(termDate % 12);
    
    start_year += increase_year;
    start_month += increase_month;
    
    if(start_month > 12){
        start_year += 1;
        start_month -= 12;
    }
    
    if(start_day === 1){
        start_day = 28;
        start_month -= 1;
        if(start_month === 0){
            start_month = 12;
        }
    }else{
        start_day -= 1;
    }
    
   
    const validDate = start_year.toString() + start_month.toString().padStart(2,'0') + start_day.toString().padStart(2,'0');

    
     return today <= validDate;
}

function solution(today, terms, privacies) {
    var answer = [];
    
    const types = {};
    
    terms.forEach((term) => {
        const [type, month] = term.split(" ");
        types[type] = month;
    });
    
    privacies.forEach((privacy, index) => {
        const [startDate, type] = privacy.split(" ");
        if(!is_valid_date(today, startDate, types[type])){
            answer.push(index + 1);
        }
    });
        
    return answer;
}


