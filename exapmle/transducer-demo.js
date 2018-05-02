const r = require("../r")

const mapping = f => reducing => (acc, v) => reducing(acc, f(v))
const filtering = pred => reducing => (acc, v) => pred(v) ? reducing(acc, v) : acc

// const xform = r.compose(
//   mapping(x => x * x),
//   mapping(x => x * 2),
//   filtering(x => x > 3),
//   filtering(x => x % 2 === 0)
// )

const xform = r.compose(
  mapping(x => x + 1),
  filtering(x => x % 2 === 0)
)

const sum = (acc, v) => acc + v
const initial = 0

console.log(r.transduce(xform, (acc, x) => [...acc, x], [], [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]))
console.log(r.transduce(xform, sum, 0, [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]))
