/**
 * Simple curry implementation
 * Drawback:
*  - it can't take placeholders
 */
const curry = (
  f, arr = []
) => (...args) => {
  const allArgs = [...arr, ...args]
  const arity = f.length
  return allArgs.length >= arity ? f(...allArgs) : curry(f, allArgs)
}

module.exports = curry