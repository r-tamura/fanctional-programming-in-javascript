const R = require("ramda")
const { tap } = require("../r")
const { Maybe, Either, IO } = require("../monad")
const DB = require("../model/db")
const { checkLengthSsn, cleanInput, safeFindStudent } = require("./helper")

// EitherとMaybeモナドが互いにシームレスに切り替わる
const showStudent = ssn =>
  Maybe.fromNullable(ssn)
    .map(cleanInput)
    .chain(checkLengthSsn)
    .chain(safeFindStudent)
    .map(R.props(["ssn", "firstname", "lastname"]))
    .map(([ssn, firstname, lastname]) => `${ssn},${firstname},${lastname}`)
    .map(tap(console.log))
    .orElse(tap(console.error))


showStudent("444-44-4444") //-> 444-44-444,John,Doe
showStudent("InvalidSSN")  //-> invalid SSN
showStudent("xxx-xx-xxxx") //-> Object not found with ID: xxxxxxxxx