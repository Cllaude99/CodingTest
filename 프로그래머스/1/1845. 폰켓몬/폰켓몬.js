function solution(nums) {
    var answer = 0;
    const phoneketmon = [];
    
    nums.forEach((element) => {
        if(!phoneketmon.includes(element)){
            phoneketmon.push(element)
        }
    });
    
    answer = (phoneketmon.length > (nums.length / 2)) ? nums.length / 2 : phoneketmon.length;
    
    return answer;
}
