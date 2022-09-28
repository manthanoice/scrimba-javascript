const btn = document.getElementById("btn")

let data = [
    {
        player: "Manthan",
        score: 69
    },
    {
        player: "Muskan",
        score: 69
    }
]

btn.addEventListener("click", function(){
    for(let i = 0; i < data.length; i++){
        if(data[i]["player"] == "Muskan")
            console.log(data[i]["score"])
    }
})