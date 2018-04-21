const R = require("ramda")
const DB = require("../model/db")
const { curry, lift, compose } = require("../r")

const getCountry = student =>
  student
    .map(R.prop("school"))
    // .map(R.tap(console.log))
    .map(R.prop("address"))
    .map(R.prop("country"))
    .getOrElse("Country does not exist.")

const find = curry((db, id) => db.find(id))
const findStudent = find(DB("students"))
const safeFindStudent = lift(findStudent)

const country = compose(getCountry, safeFindStudent)

console.log(country("444-44-4444")) //-> US
console.log(country("333-33-3333")) //-> Country does not exist.
