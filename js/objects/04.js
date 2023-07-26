function Course(year, semester, exam1, exam2) {
    this.year = year
    this.semester = semester
    this.exam1 = exam1
    this.exam2 = exam2
    this.grade_result

    this.grade = function () {
        let percentage = `${this.exam1 * 0.5 + this.exam2 * 0.5}`
        console.log(`\nPercentage achieved: ${percentage}%.`)
    }
    this.info = function () {
        console.log(`Student in the course PWKS, year ${this.year}, ${this.semester} semester, achieved ${this.grade_result}%.`)
    }
    this.student = function () {
        console.log(`${this.firstName} ${this.lastName} is a ${this.status} student.`)
    }
}

let course1 = new Course(3, "summer", 60, 70)
let course2 = new Course(2, "winter", 80, 90)

course1.firstName = "John"
course1.lastName = "Smith"
course1.status = "regular"

course2.firstName = "Hannah"
course2.lastName = "Blake"
course2.status = "regular"

course1.grade()
course1.grade_result = 65
course1.info()
course1.student()

course2.grade()
course2.grade_result = 85
course2.info()
course2.student()