/*
    문제분석 및 설계
    
    1. 
*/
function solution(files) {
    let answer = []; // files의 각각의 값들을 [HEAD, NUMBER, TAIL] 의 형태로 변환하여 저장.
    
    files.forEach((filename) => {
        answer.push(split_files(filename));
    })
    
    // HEAD -> NUMBER 순으로 정렬을 진행하고, NUMBER까지 비교하였는데도 동일하다면 입력순으로 정렬
    answer.sort((a,b) => {
        if(a[0].toLowerCase() === b[0].toLowerCase()){
            if(+a[1] !== +b[1]){
                return +a[1] - +b[1];
            }
        }else{
            if(a[0].toLowerCase() < b[0].toLowerCase()) return -1;
            else return 1;
        }
    });

    answer = answer.map((filename) => filename.join(''));
    return answer;
}

// 입력으로 filename(파일명)을 받고, 문제에서 주어진 기준에 따라 HEAD, NUMBER, TAIL로 분리한뒤
// [HEAD, NUMBER, TAIL]의 형태로 반환하는 함수
function split_files(filename){
    let NUMBER_START = null;
    let NUMBER_END = filename.length;
    
    for(let i=0; i<filename.length; i++){
        if(filename[i] !== ' ' && !isNaN(filename[i])){
            NUMBER_START = i;
            while(i+1 < filename.length && !isNaN(filename[i+1])){
                i++;
            }
            NUMBER_END = i;
            break;
        }
    }
    
    const HEAD = filename.slice(0, NUMBER_START);
    const NUMBER = filename.slice(NUMBER_START, NUMBER_END+1);
    const TAIL = NUMBER_END+1 < filename.length - 1 ? filename.slice(NUMBER_END+1) : '';
    
    return [HEAD, NUMBER, TAIL];
}