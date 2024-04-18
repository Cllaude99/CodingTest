function solution(nums) {
    var answer = 0;
    
    nums.sort((a,b) => b-a);
    const total = nums[0] + nums[1] + nums[2];
    
    const isPrime = new Array(total+1).fill(true);
    isPrime[0] = false;
    isPrime[1] = false;
    
    for(let i=2; i<= Math.sqrt(total); i++){
        if(!isPrime[i]) continue;
        for(let j=2*i; j<=total; j+=i){
            isPrime[j] = false;
        }
    }
    
    for(let i=0; i<nums.length; i++){
        for(let j=i+1; j<nums.length; j++){
            for(let k=j+1; k<nums.length; k++){
                let value = nums[i] + nums[j] + nums[k];
                if(isPrime[value]) answer += 1;
            }
        }
    }
    
    return answer;
}