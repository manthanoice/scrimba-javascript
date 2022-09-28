const btn = document.getElementById("btn")
const deleteBtn = document.getElementById("remove-btn")

btn.addEventListener("click", function(){
    localStorage.setItem("hehe", "Manthan")
    console.log(localStorage.getItem("hehe"))
})

deleteBtn.addEventListener("click", function(){
    localStorage.clear()
})