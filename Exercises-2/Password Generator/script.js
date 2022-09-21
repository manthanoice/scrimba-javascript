const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"]

let button = document.getElementById("pass-gen")
let btn1 = document.getElementById("btn1")
let btn2 = document.getElementById("btn2")

function passwordGen(){
    let nums1 = []
    for (let i = 0 ; i < 16; i++){
        nums1.push(Math.floor(Math.random()*characters.length))
    }
    
    let nums2 = []
    for (let i = 0 ; i < 16; i++){
        nums2.push(Math.floor(Math.random()*characters.length))
    }

    let password1 = ""
    let password2 = ""

    for(let i = 0; i < nums1.length; i++){
        password1 += characters[nums1[i]]
        password2 += characters[nums2[i]]
    }

    btn1.textContent = password1
    btn2.textContent = password2
}