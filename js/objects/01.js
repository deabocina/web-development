const grade_arrow = (k1, k2, sem) => k1 * 0.42 + k2 * 0.42 + sem * 0.16
console.log(`Percentage achieved in the course: ${grade_arrow(50, 80, 80)}.`)

const grade_currying = (k1) => (k2) => (sem) => k1 * 0.42 + k2 * 0.42 + sem * 0.16
console.log(`Percentage achieved in the course: ${grade_currying(50)(80)(80)}.\n`)