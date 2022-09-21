let hands = ["rock", "paper", "scissor"]

function getHand(){
    let num = Math.floor(Math.random()*3)
    return hands[num]
}

console.log(getHand())