function solution(maps) {
    const n = maps[0].length - 1;
    const m = maps.length - 1;
    const queue = [[0,0,1]];
    while (queue.length) {
        const [x,y,move] = queue.shift();
        if (x == n && y == m) return move;
        if (!maps[y][x]) continue;
        maps[y][x] = false;

        if (x-1 >= 0 && maps[y][x-1]) queue.push([x-1,y,move+1]);
        if (x+1 <= n && maps[y][x+1]) queue.push([x+1,y,move+1]);
        if (y-1 >= 0 && maps[y-1][x]) queue.push([x,y-1,move+1]);
        if (y+1 <= m && maps[y+1][x]) queue.push([x,y+1,move+1]);
    }
    return -1;
}