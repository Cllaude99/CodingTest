function solution(bandage, health, attacks) {
    var answer = 0;
    
    let success = true;
    const [t,x,y] = bandage;
    let current_time = 0;
    let current_health = health;
    let continue_success = 0;
    
    attacks.forEach(([attack_time, damage]) => {
        if(success){
            for(let i=current_time+1; i<attack_time; i++){
            continue_success += 1;
            current_health = current_health + x > health ? health : current_health + x;
            if(continue_success === t){
                current_health = current_health + y > health ? health : current_health + y;
                continue_success = 0;
            }
            current_time += 1;
            console.log(i, current_health, continue_success);
        }
        continue_success = 0;
        current_health -= damage;
        current_time += 1;
        console.log(attack_time, current_health, continue_success);
        if(current_health <= 0){
            success = false;
        };
        }
    })
    
    return success ? current_health : -1;
}