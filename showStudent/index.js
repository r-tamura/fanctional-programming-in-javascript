const { pipe } = require("../r")

const db = {
  students: {
    "444-44-4444": {
      ssn: "444-44-4444",
      firstname: "John",
      lastname: "Doe",
    },
  },
  find(id) {
    return this.students[id]
  }
}

const find = db => ssn => db.find(ssn)
const csv = student => `${student.ssn},${student.firstname},${student.lastname}`

const res = pipe(
  find(db),
  csv,
)("444-44-4444")

console.log(res)