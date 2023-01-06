let maximum = parseInt(prompt("Enter the maximum number"));
while (!maximum) {
    maximum = parseInt(prompt("Enter a valid number"));

}

const targetNum = Math.floor(Math.random() * maximum) + 1;

let guess = parseInt(prompt("enter your first guess!"));
let attempts = 1;
while (parseInt(guess) !== targetNum) {
    if (guess === 'q') break;
    attempts++;
    if (guess > targetNum) {
        guess = prompt("Too high, try again:")
    } else {
        guess = prompt("Too low, try again!")

    }




}
if (guess === 'q') {
    console.log("Ok, maybe later then.")
} else {
    console.log(`You got it! It took you ${attempts} guesses`)
}
