const curry = require("./curry")
const { Maybe } =  require("../monad")

/**
 * 関数の持ち上げ(Function Lifting)
 * 通常の関数をコンテナを利用する関数へ変換する
 */
const lift = curry((f, v) => Maybe.fromNullable(v).map(f))

module.exports = lift
