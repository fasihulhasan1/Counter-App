let count = 0
let countEl = document.getElementById("count-el")
let saveEl = document.getElementById("save-el")

function increment(){
    count = count + 1
    countEl.innerHTML = count
}
function save(){
    let savestr = count + "-"
    saveEl.textContent += savestr
    countEl.textContent = 0
    count = 0
}