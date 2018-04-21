/**
 * forkコンビネータ
 * fork :: (a -> b -> c) -> (x -> a) -> (x -> b) -> c
 */
const fork = (join, f, g) => a => join(f(a), g(a))

module.exports = fork