function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms))
}

async function example() {
    console.log('Before waiting')
    await delay(4000)
    console.log('After waiting')
}

example()