class IO {
  constructor(effect) {
    if(typeof effect !== "function") {
      throw "IO Usage: Function required"
    }
    this.effect = effect
  }
  
  static of(a) {
    return new IO(() => a)
  }
  
  static from(f) {
    return new IO(f)
  }
  
  map(f) {
    return new IO(() => f(this.effect()))
  }
  
  chain(f) {
    return f(this.effect())
  }
  
  run() {
    return this.effect()
  }
}

module.exports = IO