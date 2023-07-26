function createMessage() {
    const message = `Programming is not difficult.`
  
    function printMessage() {
        console.log(message)
    }
    return printMessage
  }
  
  const messageFunc = createMessage()
  messageFunc()