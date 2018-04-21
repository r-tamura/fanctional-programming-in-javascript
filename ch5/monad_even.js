const { tap } = require("../r")
const { wrap, empty } = require("../monad")

const isEven = n => Number.isFinite(n) && (n % 2 == 0)
const half = val => isEven(val) ? wrap(val / 2) : empty()

console.log(half(4)) //-> Wrapper (2)
console.log(half(3)) //-> Empty ()