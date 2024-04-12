process.stdin.setEncoding('utf8');
process.stdin.on('data', data => {
    const n = data.split(" ");
    const a = Number(n[0]), b = Number(n[1]);
    let result = "";
    let add_str = "";
    
    for(let i=0;i<a;i++){
        add_str += "*";
    }
    
    for(let i=0;i<b;i++){
        result += add_str;
        result += "\n";
    }
    
    console.log(result);
});