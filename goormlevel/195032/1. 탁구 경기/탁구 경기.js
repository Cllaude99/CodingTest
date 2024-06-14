// Run by Node.js
const readline = require('readline');

(async () => {
	let rl = readline.createInterface({ input: process.stdin });
	
	let N = null;
	const input = [];
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

function solution(input){
	let D_Score = 0;
	let P_Score = 0;
	
	for(let i=0; i<input.length; i++){
		if(input[i] === "D"){
			D_Score++;
		}
		else{
			P_Score++;
		}
		
		if(isDiffMoreThanTwo(D_Score, P_Score)){
			break;
		}
	}
	
	return D_Score + ":" + P_Score;
}

// 서로의 점수를 확인하여 점수의 차이가 2점 이상인지 확인
function isDiffMoreThanTwo(score1, score2){
	return Math.abs(score1 - score2) >= 2
}