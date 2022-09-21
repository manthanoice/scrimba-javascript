let player = {
    name: "Per",
    chips: 169
}

let cards = []
let sum = 0
let hasBlackJack = false
let isAlive = false
let message = ""

let startEl = document.getElementById("start-el")
let messageEl = document.getElementById("message-el")
let sumEl = document.querySelector("#sum-el")
let cardsEl = document.querySelector("#cards-el")
let playerEl = document.getElementById("player-el")

playerEl.textContent = player.name + ": $" + player.chips

function getRandomCard(){
    let num = Math.floor(Math.random()*13)+1
    if (num == 1)
        return 11
    else if(num > 10)
        return 10
    else
        return num
}

function startGame(){
    isAlive = true
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    cards = [firstCard, secondCard]
    sum = firstCard + secondCard
    renderGame()
}

function renderGame(){
    startEl.textContent = "START GAME"
    sumEl.textContent = "Sum: "+sum
    cardsEl.textContent = "Cards: "
    for(let i = 0; i < cards.length; i++)
        cardsEl.textContent += cards[i] + " "
    if(sum <= 20) 
        message = "Do you want to draw a new card? ;)"
    else if(sum == 21) {
        message = "Woohoo! You have got a blackjack! :D"
        hasBlackJack = true
    }
    else {
        message = "Oops! You're out of the game :("
        isAlive = false
        document.getElementById("start-el").textContent = "RESTART GAME"
    }
    messageEl.textContent = message
}

function newCard(){
    if (isAlive && hasBlackJack === false){
        let card = getRandomCard()
        sum += card
        cards.push(card)
        renderGame()
    }
}