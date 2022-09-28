let myLeads = `[]`
myLeads = JSON.parse(myLeads)

const inputEl = document.getElementById("input-el")
const buttonEl = document.getElementById("input-btn")
const ulEl = document.getElementById("ul-el")
const deleteBtn = document.getElementById("delete-btn")
const tabBtn = document.getElementById("tab-btn")
const delPrevBtn = document.getElementById("delete-prev-btn")
const leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"))

delPrevBtn.addEventListener("click", function(){
    myLeads.pop()
    render(myLeads)
})

if (leadsFromLocalStorage){
    myLeads = leadsFromLocalStorage
    render(myLeads)
}

tabBtn.addEventListener("click", function(){
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        myLeads.push(tabs[0].url)
        localStorage.setItem("myLeads", JSON.stringify(myLeads))
        render(myLeads)
    })
})

function render(leads){
    let listItems = ""
    for(let i = 0; i < leads.length; i++)
        listItems += `
            <li>
                <a target='_blank' href='${leads[i]}'>
                    ${leads[i]}
                </a>
            </li>
        `
    ulEl.innerHTML = listItems
    inputEl.value = ""
}

deleteBtn.addEventListener("click", function(){
    localStorage.clear()
    myLeads = []
    render(myLeads)
})

buttonEl.addEventListener("click", function(){
    myLeads.push(inputEl.value)
    console.log(myLeads)
    localStorage.setItem("myLeads", JSON.stringify(myLeads))
    render(myLeads)
})