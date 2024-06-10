// Run by Node.js
const readline = require('readline');

(async () => {
	let rl = readline.createInterface({ input: process.stdin });
	
	let N = null;
	const input = [];
	
	for await (const line of rl) {
		if(!N){
			N = +line;
		}else if(input.length === 0){
			input.push(line);
		}else{
			rl.close();
		}
	}
	console.log(solution(input));
	process.exit();
})();


function solution(input){
	const S = input[0];
	let new_S = "";
	
	for(let i=0; i<S.length; i++){
		if(S[i] === S[i].toLowerCase()){
			new_S += S[i].toUpperCase();
		}
		else{
			new_S += S[i].toLowerCase();
		}
	}
	
	return new_S;
}
