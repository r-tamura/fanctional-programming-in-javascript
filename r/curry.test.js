const test = require("ava")
const _ = require("./placeholder")
const curry = require("./curry")

test("One call", t => {
  const add = curry((a, b) => a + b)
  const actual = add(4, 2)
  const expected = 6
  t.is(actual, expected)
})

test("Two calls", t => {
  const add = curry((a, b) => a + b)
  const add4 = add(4)
  const actual = add4(2)
  const expected = 6
  t.is(actual, expected)
})

test("Three calls", t => {
  const add = curry((a, b, c) => a + b + c)
  const add4 = add(4)
  const add6 = add4(2)
  const actual = add6(3)
  const expected = 9
  t.is(actual, expected)
})
