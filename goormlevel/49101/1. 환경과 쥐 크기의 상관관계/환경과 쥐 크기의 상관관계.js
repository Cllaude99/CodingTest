const readline = require('readline');

(async () => {
    let rl = readline.createInterface({ input: process.stdin });

    let N = null;
    let A = null;
    let B = null;

    for await (const line of rl) {
        if (N === null) {
            N = +line;
        } else if (A === null) {
            A = line.split(" ").map(Number);
        } else {
            B = line.split(" ").map(Number);
            rl.close();
        }
    }
    solution(N, A, B);
    process.exit();
})();

function solution(N, A, B) {
    const A_Value = getValue(A);
    const B_Value = getValue(B);
    
    console.log(`${A_Value} ${B_Value}`);
    console.log(A_Value > B_Value ? "good" : "bad");
}

function getValue(arr) {
    let freq = new Map();
    
    // 빈도수 계산
    for (let num of arr) {
        for (let i = num - 2; i <= num + 2; i++) {
            if (!freq.has(i)) {
                freq.set(i, 0);
            }
            freq.set(i, freq.get(i) + 1);
        }
    }
    
    // 최대 빈도수와 해당 값을 찾기
    let maxCount = 0;
    let result = Number.MAX_SAFE_INTEGER;
    
    for (let [key, value] of freq) {
        if (value > maxCount || (value === maxCount && key < result)) {
            maxCount = value;
            result = key;
        }
    }
    
    return result;
}
