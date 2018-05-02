const _ = require("lodash")
const R = require("ramda")

const square = R.compose(R.tap(() => trace("Mapping")), x => x * x)
const isEven = R.compose(R.tap(() => trace("then filtering")), x => x % 2 === 0)
const numbers = _.range(200)
const trace = x => console.log(x)
const result = 
  _.chain(numbers)
    .map(square)
    .filter(isEven)
    .take(2)
    .value() //-> [0, 4, 16]
  
  console.log(result.length)