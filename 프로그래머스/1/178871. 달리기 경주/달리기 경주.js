function solution(players, callings) {
   var answer = [];

    // 1)
    let obj = {}
    // 2)
    players.forEach((e, i)=> {
        obj[e] = (obj[e] |0) + i
    })

    // 3)
    for(let i=0; i<callings.length; i++) {
        // 4)
        let player_index = obj[callings[i]];

        if(player_index > 0 && player_index != undefined) {

            // 5)
            // players 배열 변경
            let temp = players[player_index -1]; // 앞의 값을 temp에 담기
            players[player_index -1] = players[player_index]; // 현재 값을 앞의 값에 넣기
            players[player_index] = temp; // temp 값을 현재 값에 넣기

            // 6)
            // players를 찾기 위한 obj 객체 값도 바뀐대로 변경
            // ["mumu", "soe", "poe", "kai", "mine"]  ->  { mumu: 0, soe: 1, poe: 2, kai: 3, mine: 4 }
            // ['mumu', 'soe', 'kai', 'poe', 'mine']  ->  { mumu: 0, soe: 1, poe: 3, kai: 2, mine: 4 }
            obj[players[player_index -1]] =  player_index -1;
            obj[players[player_index]] = player_index;
        }
    }

    // 7)
    answer = players;

    return answer;
}