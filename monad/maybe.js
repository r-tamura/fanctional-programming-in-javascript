class Maybe {
  static of (a) {
    return Maybe.just(a)
  }
  
  static just(a) {
    return new Just(a)
  }
  
  static nothing(a) {
    return new Nothing()
  }
  
  static fromNullable(a) {
    return a !== null ? Maybe.just(a) : Maybe.nothing(a)
  }
  
  get isNothing() {
    return false
  }
  
  get isJust() {
    return false
  }
}

class Just extends Maybe {
  constructor(v) {
    super()
    this._v = v
  }
  
  get value() {
    return this._v
  }
  
  map(f) {
    return Maybe.fromNullable(f(this._v))
  }
  
  getOrElse(_) {
    return this._v
  }
  
  filter(f) {
    return Maybe.fromNullable(f(this._v)) ? this._v : null
  }
  
  chain(f) {
    return f(this._v)
  }
  
  toString() {
    return `Maybe.Just (${this._v})`
  }
  
}

class Nothing extends Maybe {
  map(f) {
    return this
  }
  
  get value() {
    return new TypeError("Can't extract the value of a Nothing")
  }
  
  getOrElse(other) {
    return other
  }
  
  filter(f) {
    return this
  }
  
  chaing(f) {
    return this
  }
  
  toString() {
    return `Maybe.Nothing`
  }
}



module.exports = Maybe