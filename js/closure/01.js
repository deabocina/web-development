function random() {
    return Math.round(Math.random() * 100) + 100
}
  
const arr = [];
for (let i = 0; i < 10; i++) {
arr.push(random())
}

arr.sort((a, b) => a - b)
console.log(arr)