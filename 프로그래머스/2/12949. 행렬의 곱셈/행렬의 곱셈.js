function solution(arr1, arr2) {
    let answer = [];
    
    const arr1_row = arr1.length;
    const arr2_row = arr2.length;
    const arr2_col = arr2[0].length;
    
    arr1.forEach((arr1_row_value) => {
        let result = [];
        let temp = [];
        let v = 0;
        
        for(let i=0; i<arr2_col; i++){
            v = 0;
            temp = [];
            for(let j=0; j<arr2_row; j++){
                temp.push(arr2[j][i]);
            }
            arr1_row_value.forEach((value, index) => {
                v += value*temp[index];
            });
            result.push(v);
        }
        
        answer.push(result);
    })
    
    return answer;
}