const R = require("rambda")
const { identity } = require("../r")
const { Wrapper } = require("../monad")

const res = Wrapper.of("Hello, Monad!").map(R.toUpper).map(identity)

console.log(res.toString()) //-> Wrapper('HELLO, MONAD!')


