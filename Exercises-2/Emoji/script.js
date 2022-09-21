let fighters = ["🐉", "🐥", "🐊","💩", "🦍", "🐢", "🐩", "🦭", "🦀", "🐝", "🤖", "🐘", "🐸", "🕷","🐆", "🦕", "🦁"]

let stageEl = document.getElementById("stage")
let fightButton = document.getElementById("fightButton")

fightButton.addEventListener("click", function(){
    num1 = Math.floor(Math.random()*fighters.length)
    num2 = Math.floor(Math.random()*fighters.length)
    if (num1 === num2)
        num2 = Math.floor(Math.random()*fighters.length)
    stageEl.textContent = fighters[num1] + "vs" + fighters[num2]
})