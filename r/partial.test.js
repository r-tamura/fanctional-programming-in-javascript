const test = require("ava")
const _ = require("./placeholder")
const partial = require("./partial")

test("should return partial applied function", t => {
  const add = (a, b) => a + b
  const add1 = partial(add, 1)
  const expected = 3
  const actual = partial(add, 1)(2)
  t.true(add1 instanceof Function)
  t.is(actual, expected)
})

test("With placeholder", t => {
  const devide = (a, b) => a / b
  const devide2 = partial(devide, _, 2)
  const expected = 3
  const actual = devide2(6)
  t.true(devide2 instanceof Function)
  t.is(actual, expected)
})

test("Multiple time partial", t => {
  const devide = (a, b, c) => a / b / c
  const devide2 = partial(devide, 18)
  const devide6 = partial(devide2, _, 2)
  const expected = 3
  const actual = devide6(3)
  t.true(devide6 instanceof Function)
  t.is(actual, expected)
})