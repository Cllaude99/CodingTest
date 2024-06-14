// Run by Node.js
const readline = require('readline');

(async () => {
	let rl = readline.createInterface({ input: process.stdin });
	
	let N = null;
	let S = []; // 단풍나무의 물든 정도에 대한 정보
	let count = 0;
	
	for await (const line of rl) {
		if(!N){
			N = +line;
		}else{
			S.push(line);
			count++;
		}
		
		if(count === N){
			rl.close();
		}
	}
	console.log(solution(S));
	process.exit();
})();

/*
	문제설계
	
	# S : N행 N열인 2차원 배열로, 단풍나무의 물든 정도를 의미하는 배열.
	# day: 모든 구역의 단풍나무가 물들때까지 걸린 일을 의미하는 변수.
	
	1. S배열의 모든 값이 0인지 확인한다.
	
	2. S배열의 모든 값이 0인 경우
		day를 반환하고 종료한다.
	
	3. S배열의 모든 값이 0이 아닌 경우
	 3-1. S배열을 값들을 하나하나 확인해가며 아래의 과정을 진행한다.
	 
	 3-2. 해당 배열의 값이 0인 경우
		3-1 과정으로 이동한다.
	 
	 3-3. 해당 배열의 값이 0이 아닌 경우 (0보다 큰 경우)
	 	a. 타겟 위치의 상,하,좌,우 배열값을 확인하여 0인 값의 개수를 구한다.
		b. 타겟 위치의 값에 a에서 구한 0인 값의 개수를 빼준다. 이때 뺀 후의 값이 음수인 경우 0을 대입한다.
		c. 3-1과정으로 이동한다.
	 
	 3-4. S배열의 모든 값에 대해 3-1 ~ 3-3 과정을 진행하였다면, 다시 1번과정으로 돌아간다.
*/

function solution(S){
	S = S.map((r) => r.split(" ").map(Number)); // 입력값 S를 원하는 정보를 얻기 위해 각각의 배열값을 가진 2차원 배열로 수정

	let day = 0; // 모든 단풍나무가 물드는데 걸린 일
	const dr = [-1, 1, 0, 0]; // 행에 대한 상,하,좌,우
	const dc = [0, 0, -1, 1]; // 열에 대한 상,하,좌,우
	
	while(!isAllChanged(S)){
		day++; // 일수 증가
		
		let copy_S = JSON.parse(JSON.stringify(S)); // S배열에 대해 깊은 복사를 진행 (확인하고 수정하기 위함)
		
		// 위 문제설계의 3번 과정
		for(let r=0; r<S.length; r++){
			for(let c=0; c<S[0].length; c++){
				if(S[r][c] !== 0){
					let zeroNum = 0;
					
					for(let k=0; k<4; k++){
						const new_r = r + dr[k];
						const new_c = c + dc[k];
						
						if(new_r >=0 && new_c >=0 && new_r < S.length && new_c < S[0].length){
							if(S[new_r][new_c] === 0){
								zeroNum++;
							}
						}
					}
					
					copy_S[r][c] = Math.max(0, S[r][c] - zeroNum); // 주변 0의 개수만큼 빼주는 과정 (결과가 0보다 작게 되는 경우 0의 값으로 업데이트 되도록함)
				}
			}
		}
		
		S = copy_S; // 수정된 배열로 S를 업데이트한다.
	}
	
	return day;
}

// 입력으로 주어진 배열의 모든 값이 0인지 확인하고, 모든 값이 0인 경우 true, 그렇지 않을 경우 false를 반환하는 함수
function isAllChanged(S){
	// 배열의 값들 중 0이 아닌 값이 있으면 false를 반환한다
	for(let r=0; r<S.length; r++){
		for(let c=0; c<S[0].length; c++){
			if(S[r][c] !== 0) return false;
		}
	}
	return true;
}