function solution(arr)
{
    var answer = [];
    let before = -1;
    
    for(let i=0;i<arr.length;i++){
        if(arr[i] !== before){
            before = arr[i];
            answer.push(arr[i]);
        }
    }
    
    
    return answer;
}