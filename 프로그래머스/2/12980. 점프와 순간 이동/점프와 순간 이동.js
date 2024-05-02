/* 문제 접근 */

/*
    1. 이동방식
    1-1. K칸 앞으로 점프 (K만큼의 건전시 사용)
    1-2. (현재까지 온 거리) * 2로 순간이동 (건전지 사용 X)
    
    
*/
function solution(n)
{
 
   var ans = 1;
    while(n!==1){
        if(Number.isInteger(n/2)){
            n/=2;
        }
        else{
            n-=1
            ans++
        }
    }
    return ans;
}




