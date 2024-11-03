const rl = require('readline-sync');
const sleep = (ms) => new Promise(resolve => setTimeout(resolve, ms));
let warningQ;
let mainQ;
let health_count;
let strength_count;
let player = {//player atributtes 0=health, 1=strength, 2=coins, 3=mana
    health: 20,
    strength: 1,
    coins: 500,
    mana: 100,
    age: 0,
    level: 1,
    name: 0
};
player.age = parseInt(rl.question("what is your age?"));
player.name = parseInt(rl.question("what is your name?"));
let goblin = { //goblin atributtes 0=health, 1=strength
    health: 10,
    strength: 1,
    level: 1
};
let goblin_warrior = {
    health: 30,
    strength: 15,
    level: 5
};
let goblinQ;
let shop;
let playerAtt;

    async function main()
    {
        function warning(monster)
{
    let leave;
    if (warningQ == 1) {
        mainAtt();
    }
    else if (warningQ == 2) {
        leave = (rl.question("are you sure you want to leave, yes(1), no(2)"));
        if (leave == 1) {
            console.log("Returning to the main menu");
            const frames = ['.', '..', '...', '....'];
            for (let i = 0; i < frames.length; i++) {
                console.log(frames[i]);
                await sleep(1000); // sleep for 1 seconds
            }
            console.log("Returned to main menu!");
        }
    }
        while (true) {
            let start = rl.question("do you want to play(1) or shop(2)");
            console.log(start);
            while (!(start >= 3 || start <= 0)) {
                if (start == 1) {
                    console.log("you are in a dark forest");
                    console.log("you see somthing in the forest");
                    mainQ = rl.question('what do you want to fight a goblin(1), or a goblin warrior(2). leave(3)');
                    while (!(mainQ >= 3)) {
                        function main_play()
                        {
                            if (mainQ == 1) {
                                warningQ = rl.question("do you really want to fight a goblin (1), or leave(2)");
                            }
                            else if (mainQ == 2) {
                                warningQ = rl.question("do you really want to fight a goblin_warrior (1), or leave(2)");
                            }
                            function mainAtt()
                            {
                                let randomnumber = (Math.floor(Math.random)());
                                if (randomnumber == 0) {
                                    health[entity] -= player.strength;
                                }
                                if (randomnumber == 1) {
                                    player.health -= strength[entity];
                                }
                            }

                            if (MainPlay == 1) {
                                main_playQ(goblin);
                            }
                        }
                        main_play();
                    }
                }
                else if (start == 2) {//shop 
                    shop = (rl.question("health +10 50 coins(1) strength +1 30 coins(2) back(3)"));
                    function shop2(coins, type, amount)
                    {
                        player.coins -= coins;
                        player[type] += amount;//adds amount to player's attribute 
                        console.log("you bought " + amount + " point" + (amount == 1 ? " " : "s ") + type + " for " + coins + " coins");
                    }
                    if (shop == 1) {
                        if (player.coins >= 50)
                            shop2(50, "health", 10);
                        health_count++; //adds 1 two health_count
                    } //checks if player has enough coins
                    else {//else when player does not have enough coins
                        console.log('not enough coins');//prints not enough coins when player has not enough coins
                    }
                }
                if (shop == 2) {
                    if (player.coins >= 30) {//checks if player has enough coins
                        shop2(30, "strength", 1,);//logs player bought strength point for 30 coins
                        strength_count++;//adds 1 two strength_count
                    }
                    else {//else when player does not have enough coins
                        console.log('not enough coins');//prints "not enough coins" when player has not enough coins
                    }
                }
                else if (shop == 3) {
                    console.log("Returning to the main menu");
                    const frames = ['.', '..', '...', '....'];
                    for (let i = 0; i < frames.length; i++) {
                        console.log(frames[i]);
                        await sleep(1000); // sleep for 1 seconds
                    }
                    console.log("Returned to main menu!");
                    break;
                }
                else {
                    console.log("invalid");
                    console.log(start);
                }
            }
        }
    }
}
    main();