function getData(callback) {
    setTimeout(function() {
        const data = { message: 'This is the data' }
        callback(data)
    }, 4000)
}

function processData(data) {
    console.log('Data processing:', data.message)
}

getData(processData)
console.log('Continuation of execution')