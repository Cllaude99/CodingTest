// Run by Node.js
const readline = require('readline');

(async () => {
	let rl = readline.createInterface({ input: process.stdin });
	
	let N = null; // 행
	let M = null; // 열

	for await (const line of rl) {
		[N, M] = line.split(" ").map(Number);
		rl.close();
	}
	
	console.log(solution(N, M));
	process.exit();
})();

/*
	문제설계
	
	1. N행 M열의 2차원 배열 map을 선언하고 모든 배열의 값을 "."으로 초기화한다.
	
	2. 문제의 요구사항에 따라 평면끝과 아래로 2행만큼 이동하는 과정을 진행한다.
		이때, 아래로 2행만큼 이동하는 과정에서 가능하지 않은 경로 (범위 밖)가 나온 경우
		더 이상 움직일 수 없으므로, 4번 과정으로 간다.
		
	3. 2번과정에서 가능한 경로는 1차원 배열 route에 [x좌표, y좌표]의 형태로 추가한다
	
	4. route배열의 값들을 참고하여 해당 위치의 map배열의 값을 "#"으로 수정한다.
	
	5. 최종적으로 수정된 map배열을 각 행씩 출력한다.
*/

function solution(N, M){
	let map = Array.from({length: N}, () => new Array(M).fill(".")); // N행 M열의 평면
	let [snakeX, snakeY] = [0,0]; // 뱀의 위치
	const route = []; // 뱀이 이동한 좌표
	let canMove = true; // 뱀이 움직일 수 있는지 판별하기 위한 변수
	let direction = true; // 뱀의 가로 이동 방향 (true인 경우, 오른쪽으로 false인 경우, 왼쪽으로 이동)
	const answer = []; // 정답출력을 위한 배열
	
	while(canMove){
		// 가로 이동 과정
		for(let i=0; i<M; i++){
			route.push([snakeX, snakeY]);
			if(direction) snakeY++;
			else snakeY--;
		}
		if(direction) snakeY--;
		else snakeY++;
		
		// 세로 이동 과정
		for(let i=0; i<2; i++){
			if(snakeX + 1 >= N){
				canMove = false;
				break;
			}
			else{
				snakeX++;
				route.push([snakeX, snakeY]);
			}
		}
		
		direction = !direction;
	}
	
	route.forEach(([x,y]) => {
		map[x][y] = "#";
	});
	
	map.forEach((r) => {
		answer.push(r.join(""));
	});
	
	return answer.join("\n");
}