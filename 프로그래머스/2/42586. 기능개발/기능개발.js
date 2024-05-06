/* 
    문제 분석 
    
    1. 각 기능은 진도가 100% 이어야 배포될 수 있다.
    2. 뒤에 있는 기능이 먼저 개발된다고 하더라도, 그보다 앞에 있는 기능의 진도가 100% 이어야, 
       배포될 수 있다.
*/

/* 
    문제 접근 
    
    1. progresses를 스택의 형태로 생각한다.
    2. speeds를 고려하여, 각 기능별로 작업 진도를 업데이트 한다.
    3. 이후, progresses의 처음 값을 확인한다.
    3-1. 처음값이 100이상인 경우, 100보다 작은 값이 나올때 까지 progresses 스택의 처음값을 제거해주며,
         제거된 만큼 작업의 개수를 1증가시킨다.
         그 후, answer배열에 작업의 개수를 삽입한다.
         마지막으로 progresses 스택이 비어 있는지 확인하고 비어 있다면, 작업을 종료한다.
    3-2. 처음값이 100미만인 경우, 2번 과정으로 돌아간다
    
    
*/
function solution(progresses, speeds) {
    var answer = []; 
    
    const speed_obj = {};
    
    progresses = progresses.map((task, index) => {
        speed_obj[index] = speeds[index];
        return [index, task];
    });
    
    while(progresses.length > 0){
        if(progresses[0][1] >= 100){
            let done = 0;
            while(progresses.length > 0 && progresses[0][1] >= 100){
                done += 1;
                progresses.shift();
            }
            answer.push(done);
        }else{
            progresses = progresses.map(([index, task]) => {
                return [index, task + speed_obj[index]];
            });
        }
    }
    
    return answer;
}