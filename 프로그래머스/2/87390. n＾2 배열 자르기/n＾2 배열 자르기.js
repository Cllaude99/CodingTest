/*
    문제분석 및 설계
    
    1. 크기가 n인 배열 arr을 선언하고 1부터 n까지의 값을 순서대로 대입하여 초기화 한다.
       즉, arr = [1,2,3,4, .... , n-1, n]
       
    2. 1부터 n
*/


function solution(n, left, right) {
    let arr = []

  for (let i = left; i <= right; i++) {
    let j = Math.floor(i / n) - i % n
    j = j < 0 ? 0 : j
    arr.push(i % n + 1 + j)
  }

  return arr
}