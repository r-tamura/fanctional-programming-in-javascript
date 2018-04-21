/**
 * Kコンビネータ
 * tap :: (a -> *) -> a -> a
 */
const tap = fn => a => {
  fn(a)
  return a
}

module.exports = tap