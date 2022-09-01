let countEl = document.getElementById("count-el")
let saveEl = document.getElementById("save-el")
let count = 0

console.log(saveEl)

function increment(){
    count ++
    countEl.innerText = count
}

function save(){
    let the_count = count + " - "
    saveEl.innerText += the_count
    console.log(count)
}

save()