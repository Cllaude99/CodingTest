function solution(fees, records) {
    const END_TIME = 23*60 + 59;
    const [Default_Time, Default_Fee, per_Time, per_Fee] = fees;
    const result = {};
    const car_start = {}; // 번호 : 입차시간 의 형태로 저장
    const car_time = {} // 차량번호 : 누적 주차 시간의 형태로 저장
    const answer = [];
    
    records.forEach((record) => {
        const [time, carNum, state] = record.split(" ");
        
        if(state === "OUT"){
            if(car_time[carNum] !== undefined){
                car_time[carNum] += Time_To_Minute(time) - Time_To_Minute(car_start[carNum]);
            }else{
                car_time[carNum] = Time_To_Minute(time) - Time_To_Minute(car_start[carNum]);    
            }
            delete car_start[carNum];
        }else{
            car_start[carNum] = time;
        }
    })
    
    Object.keys(car_start).forEach((carNum) => {
        if(car_time[carNum]){
            car_time[carNum] += END_TIME - Time_To_Minute(car_start[carNum]);
        }else{
            car_time[carNum] = END_TIME - Time_To_Minute(car_start[carNum]);
        }
    });
    
    Object.keys(car_time).forEach((carNum) => {
        if(car_time[carNum] <= Default_Time){
           result[carNum] =  Default_Fee;
        }else{
            const total_fee = Default_Fee + Math.ceil((car_time[carNum] - Default_Time)/per_Time)*per_Fee;
            result[carNum] = total_fee
        }
    });
    
    Object.keys(result).sort((a,b) => a-b).forEach((carNum) => {
        answer.push(result[carNum]);
    })
    
    return answer;
}

function Time_To_Minute(time){
    const [hour, minute] = time.split(":").map(Number);
    return hour*60 + minute;
}

