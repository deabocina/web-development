function changeBackground() {
    document.body.style.backgroundColor = "purple";
}

function increaseFont() {
    let paragraphs = document.getElementsByTagName("p");
    for (let i = 0; i < paragraphs.length; i++) {
        paragraphs[i].style.fontSize = "12px";
    }
}

function colourBenefits() {
    document.getElementById("advantages").style.backgroundColor = "blue";
}

function changeText() {
    document.getElementById("disadvantages").textContent = "New text";
}

function addParagraph() {
    let paragraph = document.createElement("p");
    paragraph.textContent = "This is a new paragraph";
    document.getElementById("paragraphs").appendChild(paragraph);
}