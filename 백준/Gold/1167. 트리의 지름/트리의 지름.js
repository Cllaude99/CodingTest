const input = require('fs').readFileSync('dev/stdin').toString().trim().split('\n');
const V = +input[0];
let g = new Array(V + 1).fill(null).map(_ => []);

function DFS(start) {
  let ret = {
    no: 0,
    dist: 0,
  };

  let visited = new Array(V + 1).fill(false);
  let s = [];
  s.push({
    no: start,
    dist: 0,
  });

  while (s.length !== 0) {
    let cur = s.pop();
    let [curNode, curDist] = [cur.no, cur.dist];    
    if (curDist >= ret.dist) {
      ret.no = curNode;
      ret.dist = curDist;
    }

    if (!visited[curNode]) {
      visited[curNode] = true;
      for (let next = 0; next < g[curNode].length; next++) {
        if (!visited[g[curNode][next].to]) {          
          s.push({
            no: g[curNode][next].to,
            dist: curDist + g[curNode][next].dist,
          })
        }
      }
    }
  }
  
  return ret;
}
function main() {
  let start = 0;
  for (let i = 1; i < input.length; i++) {  // 간선 정보 입력. 10^5.
    input[i] = input[i].trim().split(' ').map(Number);        
    let node = input[i][0];  // 정점. ???????????  근데 어떻게 답은 잘 나왔냐? 그냥 예제로 넣은게 운이좋았다.        
    start = node;    
    for (let j = 1; j < input[i].length; j += 2) { // ?
      if (input[i][j] === -1)
        break;
      g[node].push({  // node -> to 로 갈때 dist만큼의 거리가 있다.
        to: input[i][j],
        dist: input[i][j + 1],
      })      
    }
  }    
  
  let farNode = DFS(start).no;  // 임의의 노드와 가장 멀리있는 노드를 구한다.  
  let answer = DFS(farNode).dist;  // '위에서 구한 가장 멀리있는 노드'와 가장 멀리있는 노드와의 거리를 구한다.
  
  return console.log(answer.toString().trim());
}
main();