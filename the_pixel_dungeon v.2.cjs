
const rl = require('readline-sync'); // Import the readline-sync module
const sleep = (ms) => new Promise(resolve => setTimeout(resolve, ms)); // Define a sleep function
let warningQ;
let mainQ;
let health_count = 0; // Initialize health_count
let strength_count = 0; // Initialize strength_count
let player = { // Player attributes 
    name: "",
    health: 20,
    strength: 1,
    coins: 500,
    mana: 100,
    age: 0, 
};
player.age = parseInt(rl.question("What is your age? ")); // Get the player's age
player.name = rl.question("What is your name? "); // Get the player's name
let goblin = { // Goblin attributes
    health: 10,
    strength: 1,
    level: 1
};
let goblin_warrior = { 
    health: 30,
    strength: 15,
    level: 5
};
let shop; 
function main_play() {
    if (mainQ == 1) {
        warningQ = rl.question("Do you really want to fight a goblin (1), or leave (2)? ");
        warning(goblin);
    } else if (mainQ == 2) {
        warningQ = rl.question("Do you really want to fight a goblin warrior (1), or leave (2)? ");
        warning(goblin_warrior);
    }
    async function warning(monster) {
        if (warningQ == 1) {
            mainAtt();
        } else if (warningQ == 2) {
            let leave = rl.question("Are you sure you want to leave, yes (1), no (2)? ");
            if (leave == 1) {
                console.log("Returning to the main menu");
                const frames = ['.', '..', '...', '....'];
                for (let i = 0; i < frames.length; i++) {
                    console.log(frames[i]);
                    await sleep(1000); // Sleep for 1 second
                }
                console.log("Returned to main menu!");
            } else if (leave == 2) {
                warning();
            }
        }
    }
    async function main() {
        while (true) {
            let start = rl.question("Do you want to play (1) or shop (2)? ");
            if (start == 1) {
                console.log("You are in a dark forest");
                console.log("You see something in the forest");
                mainQ = rl.question('What do you want to fight: a goblin level 1 (1), a goblin warrior level 5 (2), or leave (3)? ');
                main_play();
            } else if (start == 2) { // Shop 
                shop = rl.question("Health potions for 50 coins, strength potions for 30 coins, or you can go back (1)? ");
                if (shop == "health" || shop == "health potions") {
                    let amountHP = parseInt(rl.question("How many health potions do you want to buy? "));
                    if (player.coins >= 50 * amountHP) {
                        player.coins -= 50 * amountHP;
                        player.health += 10 * amountHP; // Adds 10 points to health for each potion
                        console.log("You bought " + amountHP + " health potion(s) for " + (50 * amountHP) + " coins");
                        health_count++; // Adds 1 to health_count
                    } else {
                        console.log('Not enough coins');
                    }
                } else if (shop == "strength" || shop == "strength potions") {
                    if (player.coins >= 30) {
                        player.coins -= 30;
                        player.strength += 1; // Adds 1 point to strength
                        console.log("You bought a strength point for 30 coins");
                        strength_count++; // Adds 1 to strength_count
                    } else {
                        console.log('Not enough coins');
                    }
                } else if (shop == "back") {
                    console.log("Returning to the main menu");
                    const frames = ['.', '..', '...', '....'];
                    for (let i = 0; i < frames.length; i++) {
                        console.log(frames[i]);
                        await sleep(1000); // Sleep for 1 second
                    }
                    console.log("Returned to main menu!");
                    break;
                } else {
                    console.log("Invalid option");
                }
            } else {
                console.log("Invalid option");
            }
        }
    }
    main();
}
main_play();
