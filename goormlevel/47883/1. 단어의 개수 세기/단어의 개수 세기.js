// Run by Node.js

const readline = require("readline");
const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
});

let word = null;

rl.on("line", function(line) {
	word = line;
	rl.close();
}).on("close", function() {
	console.log(solution(word))
	process.exit();
});

// 해당 단어가 공백인 경우, 현재 단어의 길이가 0보다 길다면 answer배열에 저장후 다음 단어 참고
// 공백이 아닌 단어가 나온 경우 공백이 아닐때까지 다음단어 참고

function solution(word){
	let total = 0;
	let cur = "";
	
	for(let i=0; i<word.length; i++){
		if(word[i] === ' '){
			if(cur.length > 0){
				total++;
				cur = "";
			}
		}
		
		else{
			cur += word[i];
		}
	}
	
	if(cur.length > 0) total++;
	
	return total;
}