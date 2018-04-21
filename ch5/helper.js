const R = require("ramda")
const { Either } = require("../monad")
const { curry } = require("../r")
const DB = require("../model/db")

const trim = (str) => str.replace(/^\s*|\s*$/g, '')
const normalize = (str) => str.replace(/\-/g, '')
const cleanInput = R.compose(normalize, trim)

const validLength = (len, str) => str.length === len
const checkLengthSsn = ssn => 
  validLength(9,ssn) ? Either.right(ssn): Either.left('invalid SSN')
  
const find = curry((db, id) => db.find(id))
const safeFindObject = curry((db, id) => {
  const obj = find(db, id)
  return obj ? Either.right(obj) : Either.left(`Object not found with ID: ${id}`)
})
const safeFindStudent = safeFindObject(DB("students"))

module.exports = {
  cleanInput,
  checkLengthSsn,
  safeFindStudent,
}