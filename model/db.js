const students = require("./students")

const data = {
  students
}

const DB = category => ({
  find(id) {
    return data[category] && data[category][id] ? data[category][id] : null
  }
})

module.exports = DB