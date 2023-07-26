function addText() {
    let paragraph = document.createElement("p")
    paragraph.textContent = "Web user interface programming."
    document.getElementById("add-text").appendChild(paragraph)
}

function addElement() {
    let bullet = document.createElement("li")
    bullet.textContent = "new element"
    let lists = document.getElementsByTagName("ul")
    for (let i = 0; i < lists.length; i++) {
        lists[i].appendChild(bullet)
    }
}