function delayedGreeting(delay, greeting) {
    return new Promise(() => {
        setTimeout(() => {
            console.log(greeting)
        }, delay)
    })
}
delayedGreeting(3000, "Hello!")