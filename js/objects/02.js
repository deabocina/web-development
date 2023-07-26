const result_arrow = (courseName) => (achievedPoints) => (totalPoints) => {
    let percentage = ((achievedPoints / totalPoints) * 100).toFixed(2)
    console.log(`You have achieved ${percentage}% in the course ${courseName}.`)
}
result_arrow("PWKS")(25)(35)

const result_curry = (courseName) => (achievedPoints) => (totalPoints) => {
    let percentage = ((achievedPoints / totalPoints) * 100).toFixed(2)
    console.log(`You have achieved ${percentage}% in the course ${courseName}.\n`)
}
result_curry("PWKS")(25)(35)