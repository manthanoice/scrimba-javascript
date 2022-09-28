let totalPrice = 420.69235632455
totalPrice = Math.round(totalPrice*100)/100
const btn = document.getElementById("btn")
btn.textContent += `Buy $${totalPrice}`