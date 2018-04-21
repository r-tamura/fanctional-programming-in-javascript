/**
 * Sコンビネータ
 * sequence :: (x -> y) ... (x -> y) -> a -> void 
 */
const sequence = (...fns) => a => fns.forEach(f => f(a))

module.exports = sequence