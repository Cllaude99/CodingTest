/* 
    문제 요구사항 분석 
    
    1. 도시이름 (cities)를 순차적으로 확인하면서, 해당 도시의 이름이 캐시에 존재하는 지 확인하여야 한다.
    2. 이때 해당 도시이름이 캐시에 존재하는 경우와, 존재하지 않는 경우를 구분하여, 이후 과정을 수행해야한다.
    3. 추가로, 도시이름의 경우 대소문자의 구별이 없으므로 캐시저장소에 도시이름을 추가할때, 
       모두 소문자로 변환하여 저장하도록 한다.
       
*/

/*  
    문제 접근 전략
    
    1. 캐시 크기만큼의 캐시 저장소를 배열의 형태로 만든다.
    2. cities를 순차적으로 확인해 가며 아래와 같은 사항들을 확인한다.
    2-1. 해당 도시의 이름이 캐시 저장소에 존재하는 경우, 
         time += 1을 수행하며, 해당 도시의 이름을 캐시 저장소의 처음 위치로 이동시킨다
    2-2. 해당 도시의 이름이 캐시 저장소에 존재하지 않는 경우,
         2-2-a 캐시저장소의 크기가 cacheSize보다 작은 경우
               캐시 저장소의 처음 위치에 해당 도시의 이름을 넣어준다.
         2-2.b 캐시저장소의 크기가 cacheSize와 같은 경우
               캐시 저장소의 마지막 값을 pop해준후, 해당 도시의 이름을 처음 위치에 넣어준다.
        time += 5를 수행한다.
*/
function solution(cacheSize, cities) {
   let answer = 0;
    const cache = [];

    cities.forEach((e) => {
        e = e.toLowerCase();
        if(cache.includes(e)) {
            answer++;
            cache.splice(cache.indexOf(e),1);
        } else {
            answer += 5;
        }
        cache.push(e);
        if(cache.length > cacheSize) cache.shift();
    })

    return answer;
}
         

