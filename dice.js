let d4 = Math.floor(Math.random()*4) + 1;
let d6 = Math.floor(Math.random()*6) + 1;
let d8 = Math.floor(Math.random()*8) + 1;
let d10 = Math.floor(Math.random()*10) + 1;
let d12 = Math.floor(Math.random()*12) + 1;
let d20 = Math.floor(Math.random()*20) + 1;

let die = prompt ("Which die you want to roll?")
let userInput = prompt ("How many dices you want to roll?")
let roll = parseInt(userInput)
if (die === "d4") {
alert("You scored: " + roll * d4)
} else if (die === "d6") {
    alert("You scored: " + roll * d6)
} else if (die === "d8") {
    alert("You scored: " + roll * d8)
} else if (die === "d10") {
    alert("You scored: " + roll * d10)
} else if (die === "d12") {
    alert("You scored: " + roll * d12)
} else if (die === "d20") {
    alert("You scored: " + roll * d20)
} else {
    alert("Please enter a valid die")
}
