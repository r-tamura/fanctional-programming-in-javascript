/**
 * ORコンビネータ
 * alternation :: (a -> b) -> (a -> b) -> a -> b
 */
const alternation = f => g => a => f(a) || g(a)

module.exports = alternation