const inputText = document.getElementById("input-text")
const btn = document.getElementById("btn")
const downLen = document.getElementById("down-len")
const downVol = document.getElementById("down-vol")
const downMass = document.getElementById("down-mass")
const title = document.getElementById("title")

function calculateLength(){
    const inputValue = inputText.value
    let s = ""
    if(inputValue === "")
        s += "Hey it seems the input is empty, give me some number as an input to get results :("
    else if(isNaN(inputValue))
        s += "Please give a number as an input not a string :("
    else{
        if(inputValue === "69")
            title.textContent = "NICE"
        else
            title.textContent = "Metric/Imperial Unit Conversion"
        let feet = 0
        let meters = 0
        feet = Math.round(inputValue * 3.28084 * 10000) / 10000
        meters = Math.round(inputValue * 0.3048 * 10000) / 10000
        s += `
            ${inputValue} meters = ${feet} feet | ${inputValue} feet = ${meters} meters
        `
    }
    downLen.textContent = s
}

function calculateVolume(){
    let inputValue = inputText.value
    let s = ""
    if(inputValue === "")
        s += "Hey it seems the input is empty, give me some number as an input to get results :("
    else if(isNaN(inputValue))
        s += "Please give a number as an input not a string :("
    else{
        let gallons = 0
        let liters = 0
        gallons = Math.round(inputValue * 0.264172 * 1000) / 1000
        liters = Math.round(inputValue * 3.78541 * 1000) / 1000
        s += `
            ${inputValue} liters = ${gallons} gallons | ${inputValue} gallons = ${liters} liters
        `
    }
    downVol.textContent = s
}

function calculateMass(){
    let inputValue = inputText.value
    let s = ""
    if(inputValue === "")
        s += "Hey it seems the input is empty, give me some number as an input to get results :("
    else if(isNaN(inputValue))
        s += "Please give a number as an input not a string :("
    else{
        let pounds = 0
        let kilos = 0
        kilos = Math.round(inputValue * 0.453592 * 1000) / 1000
        pounds = Math.round(inputValue * 2.20462 * 1000) / 1000
        s += `
            ${inputValue} kilos = ${pounds} pounds | ${inputValue} pounds = ${kilos} kilos
        `
    }
    downMass.textContent = s
}

btn.addEventListener("click", function(){
    calculateLength()
    calculateVolume()
    calculateMass()
})