function solution(id_list, report, k) {
    var answer = [];
    
    let report_list = {};
    let bad_user = {};
    let banned_user = [];
    
    id_list.forEach((person) => {
        if(report_list[person] === undefined){
            report_list[person] = [];
        }
    });
    
    report.forEach((element) => {
        const [from, to] = element.split(" ");        
        if(!report_list[from].includes(to)){
            report_list[from].push(to);
            if(bad_user[to] === undefined){
                bad_user[to] = 1;
            }else{
                bad_user[to] += 1;
            }
        }
        
    });
    
    id_list.forEach((person) => {
        if(bad_user[person] >= k){
            banned_user.push(person);
        }
    });
    
    id_list.forEach((person) => {
        let result = 0;
        banned_user.forEach((banned) => {
            if(report_list[person].includes(banned)){
                result += 1;
            }
        });
        answer.push(result);
    })
    
    return answer;
}