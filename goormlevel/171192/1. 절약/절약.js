// Run by Node.js
const readline = require('readline');

(async () => {
	let rl = readline.createInterface({ input: process.stdin });
	
	let N = null;
	let input = [];
	let count = 0;
	
	for await (const line of rl) {
		if(!N){
			N = +line;
		}else{
			input.push(line);
			count++;
		}
		
		if(count === N){
			rl.close();
		}
	}
	console.log(solution(input));
	process.exit();
})();

/*
 	문제 설계
	
	# money: 구름이가 가지고 있는 돈을 의미하는 변수
	
	1. in인 경우
		money에 입력에 주어지는 값만큼 더해준다.
	
	2. out인 경우
		money에 입력에 주어지는 값만큼 빼준다.
		money가 0보다 작은지 확인하고, 만약 0보다 작다면, fail를 반환하고 종료한다.
		
	3. N개의 건수에 대해 fail이 반환되지 않았다면 success를 반환하고 종료한다.
*/

function solution(input){
	let money = 0; // 구름이가 가지고 있는 돈을 의미하는 변수
	
	for(let i=0; i<input.length; i++){
		const[option, m] = input[i].split(" ");
		
		// in인 경우 money에 m값을 더해준다.
		if(option === "in"){
			money += parseInt(m);
		}
		
		// out인 경우, money에 m값을 빼주고, money가 0보다 작은지 확인한다.
		else{
			money -= parseInt(m);
			if(money < 0){
				return "fail";
			}
		}
	}
	
	return "success";
}