let num1 = 420
let num2 = 69

let sumEl =  document.getElementById("sum-el")

document.getElementById("num1-el").textContent = num1
document.getElementById("num2-el").textContent = num2

function add(){
    let ans = num1 + num2
    sumEl.textContent = "Sum: " + ans
}

function subtract(){
    let ans = num1 - num2
    sumEl.textContent = "Sum: " + ans
}

function multiply(){
    let ans = num1 * num2
    sumEl.textContent = "Sum: " + ans
}

function divide(){
    let ans = num1 / num2
    sumEl.textContent = "Sum: " + ans
}