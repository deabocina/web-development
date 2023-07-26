function checkWeather(city) {
    return new Promise((resolve, reject) => {
        let weatherData = {
            sunny: true,
        }

        setTimeout(() => {
            if (weatherData.sunny) {
                resolve(`The weather is sunny in ${city}.\n`)
            } else {
                reject(`The weather is not sunny in ${city}.\n`)
            }
        }, 2000)
    })
}

checkWeather("Split")
    .then((message) => {
      console.log(message)
    })
    .catch((error) => {
      console.error(error)
    })