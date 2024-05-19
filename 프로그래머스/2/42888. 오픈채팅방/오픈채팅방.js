/*
    문제분석 및 설계
    
    1. 채팅방에 들어오거나 나가는 정보 및 닉네임을 변경한 기록이 담긴 문자열 배열을 참고하여,
       최종적으로 방을 개설한 사람이 보게되는 메세지를 문자열 배열 형태로 return 해야한다.
       
    1. record배열 값에는 uid값이 있으므로, 이 값을 이용하여 해당 유저아이디(uid)값에 대한
       닉네임을 객체형식으로 저장하여 관리할 수 있다. (예. { "uid1234" : "Muzi" })
       
    2. record 배열의 값에 있는 유저의 상태에는 "Enter", "Leave", "Change"가 있는데,
       이때 Change의 경우에는 해당 uid값을 가진 유저의 이름을 바꾸어 주어야 하므로,
       Change가 나온 경우에만 nickname 참고하여 해당 유저의 닉네임을 수정한다.
       
    3. 매번 record 배열을 참고할때에는 해당 record값에서 상태(Enter, Leave)와 uid에 해당 하는 값을
       stateInfo배열에 저장한다.
       
    4. 1~3번 과정을 모든 record배열값에 대해 수행한 뒤, stateInfo배열을 참고하여
       방을 개설한 사람이 보게되는 메세지를 문자열 배열 형태로 return 한다.
       
*/


function solution(record) {
    let answer = [];
    
    // 가능한 사용자의 상태에 대한 변수
    const STATE = {
        "Enter" : "들어왔습니다.",
        "Leave" : "나갔습니다.",
        "Change" : false
    }
    
    
    let nickName = {}; // 해당 유저아이디에 대한 닉네임을 알 수 있는 변수
    let stateInfo = []; // record 배열값들의 [상태, 유저아이디] 에 대한 정보에 대한 변수
    
    record.forEach((info) => {
        const [state, uid, name] = info.split(" ");
        
        if(state === "Enter" || state === "Change"){
            nickName[uid] = name;
        }
        
        if(Boolean(STATE[state])){
            stateInfo.push([state, uid]);
        }
    });
    
    stateInfo.forEach(([state, uid]) => {
        const sentence = nickName[uid] + "님이 " + STATE[state];
        answer.push(sentence);
    })
   
    return answer;
}