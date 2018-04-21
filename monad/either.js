class Either {
  constructor(v) {
    this._v = v
  }
  
  get value() {
    return this._v
  }
  
  static of(a) {
    return Either.right(a)
  }
  
  static left(a) {
    return new Left(a)
  }
  
  static right(a) {
    return new Right(a)
  }
  
  static fromNullable(a) {
    return a !== null && a !== undefined ? Either.right(a) : Either.left(a)
  }
}

class Left extends Either {
  map(_) {
    return this
  }
  
  get value() {
    throw new TypeError("Can't extract the value of Left(a)")
  }
  
  getOrElse(other) {
    return other
  }
  
  orElse(f) {
    return f(this._v)
  }
  
  chain(f) {
    return this
  }
  
  getOrElseThrow(a) {
    throw new Error(a)
  }
  
  filter(f) {
    return this
  }
  
  toString() {
    return `Either.Left (${this._v})`
  }
}

class Right extends Either {
  map(f) {
    return Either.of(f(this._v))
  }
  
  getOrElse(_) {
    return this._v
  }
  
  orElse(f) {
    return this
  }
  
  chain(f) {
    return f(this._v)
  }
  
  getOrElseThrow() {
    return this._v
  }
  
  filter(f) {
    return Either.fromNullable(f(this._v) ? this._v : null)
  }
  
  toString() {
    return `Either.Right (${this._v})`
  }
}

module.exports = Either