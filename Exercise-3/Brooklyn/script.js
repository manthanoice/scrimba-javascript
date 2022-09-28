const images = [
    "hip1.jpg",
    "hip2.jpg",
    "hip3.jpg"
]

const container = document.getElementById("container")

function renderImages(){
    let dom = ""
    for(let i = 0; i < images.length; i++){
        dom += `
            <img class="team-img" src = ${images[i]}>
        `
    }
    container.innerHTML = dom
}

renderImages()