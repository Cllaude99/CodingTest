const readline = require('readline');
let rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout,
});

let T = null;
let input = [];
let count = 0;

rl.on('line', (line) => {
	if(!T){
		T = +line;
	}else{
		input.push(line);
		count++;
	}
	
	if(count === T){
		rl.close();
	}
});

rl.on('close', () => {
	console.log(solution(input));
	process.exit();
})

/*
	문제설계
	
	result: T개의 계산식의 결과가 저장되어 있는 배열
	
	1. T개의 계산식에 대해 각 줄의 입력을 '정수', '연산기호', '정수' 의 형태로 분리한다.
	
	2. 연산기호에 따라 알맞은 연산을 진행하고 연산결과를 result배열에 추가한다.
	
	3. 모든 T개의 입력에 대해 위의 과정이 완료되었을 경우, result배열의 모든 값의 합을 구해 출력한다.
*/

function solution(input){
	const result = []; // 각 줄의 연산결과가 저장되어 있는 배열
	
	for(let i=0; i<input.length; i++){
		let [num1, operator, num2] = input[i].split(" ");
		num1 = parseInt(num1);
		num2 = parseInt(num2);
		
		// 위 문제설계 2번과정 (연산자에 따라 알맞은 연산을 수행하고 result배열에 추가하는 과정)
		switch(operator){
			case "+":
				result.push(num1 + num2);
				break;
			case "-":
				result.push(num1 - num2);
				break;
			case "*":
				result.push(num1 * num2);
				break;
			case "/":
				result.push(Math.floor(num1 / num2));
				break;
		}
	}
	
	return result.reduce((acc, cur) => acc + cur, 0); // result 배열값들의 합을 반환
}