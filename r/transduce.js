/**
 * トランスデューサー
 * Array.prototype.map, Array.prototype.filter等を連結した場合に不要な
 * 中間配列が生成されてしまう。
 * -> 不要なメモリの消費
 * -> トランスデューサーで可読性を失わずに解決できる
 * 
*  const res = [0, 1, 2, 3, 5, 6, 7, 8, 9, 10]
 *  .filter(isHoge)
 *  .filter(isFoo)
 *  .map(f1)
 *  .map(f2)
 * 
 *  vs
 * 
 * const array = [0, 1, 2, 3, 5, 6, 7, 8, 9]
 * const res = []
 * for (let x of array) {
 *   if (isHoge and isFoo) {
 *     res.push(f2(f1(x)))
 *   }
 * }
 * 
 * - https://medium.com/@roman01la/understanding-transducers-in-javascript-3500d3bd9624
 * - https://qiita.com/41semicolon/items/666a3ff1c226828ecdb2
 * (Shorot cut fusionとは異なるもの)
 */

const curry = require("./curry")

const transduce = curry((xform, reducing, initial, input) => input.reduce(xform(reducing), initial))

module.exports = transduce