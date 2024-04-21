function getLength(from, to){
    const [fromX, fromY] = from;
    const [toX, toY] = to;
    
    return Math.abs(fromX-toX) + Math.abs(fromY-toY);
}

function solution(numbers, hand) {
    var answer = '';
    
    const keypad = {
        0: [1,0],
        1: [0,3],
        2: [1,3],
        3: [2,3],
        4: [0,2],
        5: [1,2],
        6: [2,2],
        7: [0,1],
        8: [1,1],
        9: [2,1],
    }
    const only_left = [1,4,7];    
    const only_right = [3,6,9];
    
    let leftHand = [0,0];
    let rightHand = [2,0];
    
    numbers.forEach((number) => {
        const leftHandLength =  getLength(leftHand, keypad[number]);
        const rightHandLength = getLength(rightHand, keypad[number]);
         
        if(only_left.includes(number)){
            answer += "L";
            leftHand = keypad[number];
        }else if(only_right.includes(number)){
            answer += "R";           
            rightHand = keypad[number];
        }else{
            if(leftHandLength < rightHandLength){
                answer += "L";
                leftHand = keypad[number];
            }else if(rightHandLength < leftHandLength){
                answer += "R";
                rightHand = keypad[number];
            }else{
                if(hand ==="left"){
                    answer += "L";
                    leftHand = keypad[number];
                }else{
                    answer += "R";
                    rightHand = keypad[number];
                }
            }
        }
    })
    
    return answer;
}