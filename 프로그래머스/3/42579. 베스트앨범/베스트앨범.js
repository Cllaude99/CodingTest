/*
    문제설계
    
    # 고려해볼수 있는 경우
    1. 장르가 1개인 경우
    2. 장르가 2개이상일때, 상위 2개의 장르 중 어떠한 장르에 속하는 곡이 하나인 경우
    
    # 접근
    
    1. 주어진 입력에서 장르별로 몇개의 노래가 실행되었는지 확인한다.
    
    2. 위에서 파악한 장르에 대해 노래가 가장 많이 play된 순서대로 내림차순 정렬한다
    
    3. 입력으로 주어진 장르가 1개인 경우
        1. plays의 값들을 [재생횟수, 고유번호]의 형태로 변환하고, 재생횟수 기준으로 내림차순 정렬한다.
        2. plays의 길이가 1인 경우 처음 1개의 값만을 반환하고 종료한다.
        3. plays의 길이가 2 이상인 경우 처음 2개의 값을 반환하고 종료한다.
    
    4. 입력으로 주어진 장르가 2개이상인 경우
        처음 2개의 장르에 대해 첫 번째 장르를 first_genre, 두 번째 장르를 second_genre 라고 하자
        
        genres배열을 참고하여,
        
        배열1에는 first_genre와 동일한 장르에 대해 [고유번호, 재생된 노래 횟수] 의 형태로 저장한다
        배열2에는 second_genre와 동일한 장르에 대해 [고유번호, 재생된 노래 횟수] 의 형태로 저장한다.
        
        a. 배열1, 배열2에 대해 재생된 노래 횟수 순으로 내림차순정렬하고, 재생된 노래 횟수가 동일하다면,
           고유번호 순으로 오름차순 정렬한다.
        
        b. 먼저 배열1에 대해 배열1의 길이를 확인한다.
        배열1의 길이가 1인 경우 -> 처음 1개의 고유번호 값 반환
        배열1의 길이가 2이상인 경우 -> 처음 2개의 고유번호 값 반환
        
        c. 배열2에 대해서도 b과정과 동일하게 수행한다.
        
        d. 최종적으로 저장된 결과를 반환하고 종료한다.
*/

function solution(genres, plays) {
    const answer = []; // 정답
    
    let genre_obj = {}; // {"장르" : 재생된 노래의 횟수}
    let sorted_genre = []; // 재생된 노래의 횟수 기준으로 장르를 내림차순 정렬
    
    // 위 접근 1번 과정
    genres.forEach((g, i) => {
        if(genre_obj[g] === undefined){
            genre_obj[g] = plays[i];
        }else{
            genre_obj[g] += plays[i];
        }
    });
    
    // 위 접근 2번 과정
    Object.keys(genre_obj).forEach((g) => {
        sorted_genre.push([g, genre_obj[g]]);
    });
    
    sorted_genre.sort((a,b) => b[1] - a[1]);
    
    // 위 접근 3번 과정
    if(sorted_genre.length === 1){
        plays = plays.map((p, i) => [p, i]); // [재생횟수, 고유번호] 형태로 변환
        plays.sort((a,b) => b[0] - a[0]); // 재생횟수 기준 내림차순 정렬
        
        if(plays.length === 1){
            answer.push(plays[0][1]);
        }else{
            answer.push(plays[0][1]);
            answer.push(plays[1][1]);
        }
    }
    
    // 위 접근 4번 과정
    else{
        sorted_genre.forEach(([g, _]) => {
            let arr = [];
            
            genres.forEach((genre, i) => {
                if(genre === g){
                    arr.push([i, plays[i]]);
                }
            });
            
            arr.sort((a,b) => {
                if(a[1] === b[1]) return a[0] - b[0];
                else return b[1] - a[1];
            });
            
            if(arr.length === 1){
                answer.push(arr[0][0]);
            }
            else{
                answer.push(arr[0][0]);
                answer.push(arr[1][0]);
            }
        })
    }
    
    return answer;
}
