// Run by Node.js
const readline = require('readline');

(async () => {
	let rl = readline.createInterface({ input: process.stdin });
	
	let N = null;
	let D = null;
	let S = null;
	
	for await (const line of rl) {
		if(N === null){
			N = +line;
		}else if(D === null){
			D = line.split("");
		}else if(S === null){
			S = line.split(" ").map(Number);
			rl.close();
		}
	}
	console.log(solution(N, D, S));
	process.exit();
})();

/*
	요구사항 분석 및 문제설계
	
	# last_coords: [행, 열]의 형태로 마지막에 놓은 블록의 위치를 의미한다.
	# coords변수: [행, 열, 점수]의 값들을 저장하는 배열 (놓은 배열의 위치를 확인하는 변수)
	
	- 시작은 [0,0]위치에 점수가 1점인 블록을 놓는다.
	- N번 만큼 아래의 과정을 수행한다.
	
	1. 마지막에 블록을 놓은 위치로 부터, D값을 참고하여, 놓을 위치를 정한다.
	2. 해당 위치가 coords변수에 존재하는 지 확인한다.
	
	a. 해당위치가 존재하는 경우
		존재하는 위치 이후에 저장된 값들을 coords에서 삭제한다.
		coords변수에 [행, 열, 점수]의 형태로 저장한다.
	
	b. 해당위치가 존재하지 않는 경우
		coords변수에 [행, 열, 점수]의 형태로 저장한다.
	
	
*/

function solution(N, D, S){
	let last_coords = [0,0];
	let coords = [[0,0,1]];
	
	D.forEach((d, i) => {
		switch(d){
			case "U":
				last_coords[0]--;
				break;
			case "R":
				last_coords[1]++;
				break;
			case "D":
				last_coords[0]++;
				break;
			case "L":
				last_coords[1]--;
		}
		if(findIndex(coords, last_coords) !== -1){
			coords = coords.slice(0, findIndex(coords, last_coords));
		}
		coords.push([last_coords[0], last_coords[1], S[i]]);
	})
	return sumBlocks(coords);
}

function sumBlocks(coords){
	let sum = 0;
	coords.forEach(([r,c,p]) => sum += p);
	return sum;
}

function findIndex(coords, last_coords){
	for(let i=0; i<coords.length; i++){
		const [r,c,_] = coords[i];
		if(r === last_coords[0] && c === last_coords[1]) return i;
	}
	return -1;
}