let randomNum = Math.floor((Math.random() * 100) + 1);
let userNum;


let guess = 0;
while (guess < 5) {
    userNum = prompt("Guess a number between 1 and 100");
    guess++;
    console.log(randomNum);

    if (userNum < randomNum) {
    alert(`You have guessed too low.`)
} else if (userNum > randomNum) {
    alert(`You have guessed too high.`)
} else {
    alert(`You have guessed correctly.`)
    break;
}
}