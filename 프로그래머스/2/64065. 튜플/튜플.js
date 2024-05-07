function solution(s) {
    var answer = [];
    
    const temp = [];
    
    s = s.slice(1, -1);
    
    for(let i=0; i<s.length; i++){
        if(s.charAt(i) === '{'){
            let custom = '';
            let index = i+1;
            while(s.charAt(index) !== '}'){
                custom += s.charAt(index);
                index++;
                i++;
            }
            i++;
            temp.push(custom.split(",").map(Number));
        }
    }
    
    let before = [];
    
    for(let i=1; i<=temp.length; i++){
        const t = temp.filter((element) => element.length === i);
        t[0].forEach((element) => {
            if(!answer.includes(element)){
                answer.push(element);
            }
        })
    }
    
    return answer;
}