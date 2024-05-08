function solution(str1, str2) {
    var answer = 0;
    
    str1 = str1.toLowerCase();
    str2 = str2.toLowerCase();
    
    const str1_obj = updateObj(str1);
    const str2_obj = updateObj(str2);
    
    
     if(Object.keys(str1_obj).length === 0 && Object.keys(str2_obj).length === 0){
        return 65536;
    }
    
    const intersecion = getIntersection(str1_obj, str2_obj).length;
    const union = getUnion(str1_obj, str2_obj).length;
    
    console.log("intersecion", intersecion)
    console.log("union", union)
    
    answer = Math.floor((intersecion / union) * 65536)
    
    return answer;
}

function updateObj(str){
    const obj = {};
    
    for(let i=0; i<str.length; i++){
        let word = str.slice(i, i+2);
        let compare_word = word.replaceAll(/[^a-z]/g, '');
        
        if(word !== compare_word || word.length < 2) continue;
        
        if(obj[word] === undefined){
            obj[word] = 1;
        }else{
            obj[word] += 1;
        }
    }
    
    return obj;
}

function getIntersection(str1_obj, str2_obj){
    const intersection = [];
    
    const str1_keys = Object.keys(str1_obj);
    const str2_keys = Object.keys(str2_obj);
    
    str1_keys.forEach((word) => {
        if(str2_keys.includes(word)){
            const minNum = Math.min(str1_obj[word], str2_obj[word]);
            for(let i=0; i<minNum; i++){
                intersection.push(word);
            }
        }
    });
    
    return intersection;
}

function getUnion(str1_obj, str2_obj){
    const union = [];
    
    const str1_keys = Object.keys(str1_obj);
    const str2_keys = Object.keys(str2_obj);
    const both_keys = new Set([...str1_keys, ...str2_keys]);
    
    both_keys.forEach((word) => {
        const maxNum = Math.max(str1_obj[word] ?? 0, str2_obj[word] ?? 0);
        for(let i=0; i<maxNum; i++){
                union.push(word);
        }
    });
    
    return union;
}