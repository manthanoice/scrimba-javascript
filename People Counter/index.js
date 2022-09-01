let countEl = document.getElementById("count-el")
let saveEl = document.getElementById("save-el")
let count = 0

console.log(saveEl)

function increment(){
    count ++
    countEl.textContent = count
}

function save(){
    let the_count = count + " - "
    saveEl.textContent += the_count
    console.log(count)
    count = 0
    countEl.textContent = count
}

save()