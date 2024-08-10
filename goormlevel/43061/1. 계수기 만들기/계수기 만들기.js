// Run by Node.js

const readline = require("readline");
const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
});

let N = null;
let A = [];
let B = [];
let K = null;

rl.on("line", function(line) {
	if(N === null){
		N = +line;
	}else if(A.length === 0){
		A = line.split(" ").map(Number);
	}else if(B.length === 0){
		B = line.split(" ").map(Number);
	}else{
		K = +line;
		rl.close();
	}
}).on("close", function() {
	console.log(solution(N, A, B, K));
	process.exit();
});

function solution(N,A,B,K){
	let curLocation = N-1;
	
	for(let i=0; i<K; i++){
		curLocation = N-1;
		while(curLocation >= 0){
				if(B[curLocation] + 1 <= A[curLocation]){
					B[curLocation]++;
					break;
				}else{
					B[curLocation] = 0;
					curLocation--;
				}
			}
	}
	
	return B.join('');
}