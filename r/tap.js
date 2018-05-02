const curry = require("./curry")
/**
 * Kコンビネータ
 * tap :: (a -> *) -> a -> a
 */
const tap = curry((fn, a) => {
  fn(a)
  return a
})

module.exports = tap