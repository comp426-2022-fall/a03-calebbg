export default function roll(sides, dice, rolls) {
    var results = [];
    for (let roll = 0; roll < rolls; roll++) {
        var roll_total = 0;
        for (let die = 1; die <= dice; die++) {
            let rand_num = 1 + Math.floor( Math.random() * sides);
            roll_total += rand_num;
        }
        results[roll] = roll_total;
    }
}