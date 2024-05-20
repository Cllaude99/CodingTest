const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

function solution(input) {
    const numberToRoman = {
        1000: 'M',
        900: 'CM',
        500: 'D',
        400: 'CD',
        100: 'C',
        90: 'XC',
        50: 'L',
        40: 'XL',
        10: 'X',
        9: 'IX',
        5: 'V',
        4: 'IV',
        1: 'I'
    };
    const romanToNumber = {
        'M': 1000,
        'CM': 900,
        'D': 500,
        'CD': 400,
        'C': 100,
        'XC': 90,
        'L': 50,
        'XL': 40,
        'X': 10,
        'IX': 9,
        'V': 5,
        'IV': 4,
        'I': 1
    };
    const T = parseInt(input[0]);
    const answer = [];

    for (let i = 1; i <= T; i++) {
        const value = input[i];
        if (!isNaN(value)) {
            // 아라비아 숫자를 로마 숫자로 변환
            let num = parseInt(value);
            let roman = '';
            for (let key of Object.keys(numberToRoman).sort((a, b) => b - a)) {
                while (num >= key) {
                    roman += numberToRoman[key];
                    num -= key;
                }
            }
            answer.push(roman);
        } else {
            // 로마 숫자를 아라비아 숫자로 변환
            let roman = value;
            let num = 0;
            for (let j = 0; j < roman.length; j++) {
                if (j + 1 < roman.length && romanToNumber[roman[j]] < romanToNumber[roman[j + 1]]) {
                    num += romanToNumber[roman[j + 1]] - romanToNumber[roman[j]];
                    j++;
                } else {
                    num += romanToNumber[roman[j]];
                }
            }
            answer.push(num.toString());
        }
    }

    return answer.join('\n');
}

console.log(solution(input));
