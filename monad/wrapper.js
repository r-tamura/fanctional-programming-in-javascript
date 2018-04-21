class Wrapper {
  constructor(x) {
    this._x = x
  }
  
  static of(x) {
    return new Wrapper(x)
  }
  
  map(f) {
    return Wrapper.of(f(this._x))
  }
  
  join() {
    if (!(this._x instanceof Wrapper)) {
      return this
    }
    
    return this._x.join()
  }
  
  valueOf() {
    return `Wrapper (${this._x})`
  }
  
  toString() {
    return `Wrapper (${this._x})`
  }
}

// wrap :: a -> Wrapper(a)
const wrap = v => Wrapper.of(v)

module.exports = Wrapper