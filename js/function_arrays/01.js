let arr = [2, 4, 6, 8]

arr.unshift(0)
console.log(arr)
arr.push(12);
console.log(arr)
arr.splice(arr.length-1, 0, 10)
console.log(arr)
arr.splice(1, 1)
console.log(arr)
arr.pop()
console.log(arr)
arr[1] = 2
console.log(arr)

let sum = 0
for (let i = 0; i < arr.length; i++) {
    sum += arr[i]
}
console.log(sum)

for (let i = 0; i < arr.length; i++) {
    console.log(arr[i])
}