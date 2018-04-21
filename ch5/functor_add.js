const { tap } = require("../r")
const { wrap } = require("../monad")

const two = wrap(2)
const plus3 = x => x + 3
two.fmap(plus3).fmap(tap(console.log)) // -> Wrapper(5)

// 5