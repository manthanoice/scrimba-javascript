const player = "Manthan Agarwal Bosamiya"
const opponent = "Muskan Agarwal Bosamiya"
const game = "ChutiyaFighters"

let points = 0
let hasWon = false

points += 100
hasWon = true

if (hasWon)
    console.log(`${player} got ${points} points and won the ${game} game!"`)
else 
    console.log(`The winner is ${opponent}! ${player} lost the game`)

// Go through all variables and decide if they should be let or const
// Change the console logs to use template strings instead of double quotes