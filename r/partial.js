const _ = require("./placeholder")

const indexOfAll = (heystack, needle, indexes = []) =>
  heystack.includes(needle) 
  ? indexOfAll(
      heystack.slice(heystack.indexOf(needle)+1),
      needle,
      [...indexes, (indexes.length ? indexes[indexes.length-1] + 1 : 0) + heystack.indexOf(needle)]
    )
  : indexes

const indexMap = (xs, ys, indexes) => {
  const res = []
  let position = 0
  for (let i = 0; i < xs.length; i++) {
    res.push(i == indexes[position] ? ys[position] : xs[i])
  }
  return res
}


const partial = (fn, ...boundArgs) => {
  return (...restArgs) => {
    const indexes = indexOfAll(boundArgs, _)
    return fn(...indexMap(boundArgs, restArgs.slice(0, indexes.length), indexes), ...restArgs.slice(indexes.length))
  }
}

module.exports = partial