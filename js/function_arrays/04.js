function displayCountries(arr) {
    let newArr = arr.filter(country => country.population > 1000000).map(country => country.name)
    return newArr
}

console.log(displayCountries([
    { name: "France", capital: "Paris", population: 900000 },
    { name: "England", capital: "London", population: 4000000 },
    { name: "Vatican City", capital: "Vatican City", population: 800 },
    { name: "China", capital: "Beijing", population: 1400000000 }
]))