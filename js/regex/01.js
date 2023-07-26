function checkEndOfSentence(arr) {
    let regex = /JavaScript$/
    let cnt = 0
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].match(regex) == true)
        cnt++
    }

    if (cnt === 3)
        return true
    else
        return false
}
    
const sentences = ["I enjoy learning JavaScript", "She is proficient in JavaScript", "JavaScript is a powerful language"]
console.log(checkEndOfSentence(sentences))